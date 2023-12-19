import { NextPageWithLayout } from './_app';
import { useModalContext } from '@demo-carbon-credit/providers';
import { User } from '@demo-carbon-credit/components';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useGetAllUsersQuery } from '@demo-carbon-credit/database';

import { ethers } from 'ethers';
import router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';


const Page: NextPageWithLayout = () => {
  const [status, setStatus] = useState('Registered');

  const router = useRouter();
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [orgtableData, setOrgTableData] = useState<Array<any>>([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState<Array<any>>([]);
  const [searchKey, setSearchKey] = useState('n');



   const { setModal } = useModalContext();

    const {
      data: users,
      loading,
      error,
    } = useGetAllUsersQuery({
      fetchPolicy: 'network-only',
    });
  
    var totalUsers=users?.z_users;

    useEffect(() => {
      const Data: any[] = [];
      users?.z_users.map((v) => {
        Data.push(v);
      });
      console.log("Data",Data)
      const slice = Data.slice(offset, offset + perPage);
      setPageCount(Math.ceil(Data.length / perPage));
      setOrgTableData(Data);
      setSearchData(Data);
      setTableData(slice);
    }, [users?.z_users]);
  
  console.log("totalUsers",totalUsers);
  const handlerowsperPage = (e) => {
    const showperpage = e.currentTarget.value;
    setPerPage(parseInt(showperpage));
    setCurrentPage(0);
    if (searchKey == 'y') {
     
    } else {
      const slice = orgtableData.slice(0, 0 + e.currentTarget.value);
      setPageCount(Math.ceil(orgtableData.length / e.currentTarget.value));
      setTableData(slice);
      setOffSet(0);
      setSearchData(orgtableData);
    }
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offsetdata = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffSet(offsetdata);
    loadMoreData(offsetdata);
  };

  const loadMoreData = (offsetdata) => {
    const data = orgtableData;
    if (searchKey == 'y') {
      
    } else {
      const slice = data.slice(offsetdata, offsetdata + perPage);
      setPageCount(Math.ceil(data.length / perPage));
      setOffSet(offsetdata);
      setTableData(slice);
      setSearchData(data);
    }
  };
  
  return (
    <>
     <div>
        <h5> Users</h5>
      </div>

      <Row>
        <Col>
          <Table className="tablelist" responsive>
            <thead>
              <th>User Name</th>
              <th>Password</th>
              <th></th>
            </thead>
            <tbody></tbody>

            <tbody>
              {tableData &&
                tableData.filter((v) => v.username !== 'admin').map((v, i) => (
                  <tr key={i}>
                    <td>{v.username}</td>
                  
                    <td>
                      <a href='#' onClick={() => alert(`Password is : ${v.password}`)}>
                        View
                      </a>
                    </td>
                   
                    
                    <td className="text-right users-listing-btns">
                      <button
                        className="btn btn-viewmore table-btn"
                        onClick={() => {
                          setModal({
                            component: <User username={v.username}
                                user_id={v.id}/>,
                          });
                        }}
                      >
                        View Funds
                      </button>{' '}
                      &nbsp;
                      <button
                        className="btn btn-viewmore table-btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <div className="wallet-info">
                                <h2>Wallet Address</h2>
                                <p>{v.address}</p>
                              </div>
                            ),
                          });
                        }}
                      >
                        Wallet Address
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

       
        </Col>
      </Row>
      {tableData.length != 0 && (
          <div className="pagging-area pagging-trans">
            <div className="pagination_row_div">
              <p className="pagination_title">Showing items per page:</p>
              <div className="pagination_input_div">
                <select
                  className="pagination_select"
                  style={{ margin: 0, background: 'transparent' }}
                  name="pagination_value"
                  value={perPage}
                  onChange={handlerowsperPage}
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
            <div className="pagination_row_right_div">
              <p className="pagination_total">
                Showing {offset + 1} to{' '}
                {searchData.length < offset + perPage && (
                  <span>{searchData.length}</span>
                )}
                {searchData.length > offset + perPage && (
                  <span>{offset + perPage} </span>
                )}{' '}
                of {searchData.length} items
              </p>
              <ReactPaginate
                previousLabel={
                  <ArrowBackIosIcon
                    className="pagination_prev_btn"
                    style={{ color: '#2438a7' }}
                  />
                }
                nextLabel={
                  <ArrowForwardIosIcon
                    className="pagination_next_btn"
                    style={{ color: '#2438a7' }}
                  />
                }
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={currentPage}
              />
            </div>
          </div>
        )} 
    </>
  );
};
export default Page;
