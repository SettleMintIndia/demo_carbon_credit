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
  const [searchData, setSearchData] = useState([]);
  const [searchData2, setSearchData2] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [offset2, setOffSet2] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [tableData2, setTableData2] = useState([]);

  const [orgtableData, setOrgTableData] = useState([]);
  const [orgtableData2, setOrgTableData2] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [perPage2, setPerPage2] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageCount2, setPageCount2] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');
  const [status, setStatus] = useState('Registered');

  const router = useRouter();


   const { setModal } = useModalContext();

    const {
      data: users,
      loading,
      error,
    } = useGetAllUsersQuery({
      fetchPolicy: 'network-only',
    });
  
    var totalUsers=users?.z_users;
  console.log("totalUsers",totalUsers);
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
              {totalUsers &&
                totalUsers.filter((v) => v.username !== 'admin').map((v, i) => (
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
    </>
  );
};
export default Page;
