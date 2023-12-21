import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import React from 'react';
import { Table } from 'react-bootstrap';
import { SecondaryTransferModal } from '@demo-carbon-credit/components';
import { useGettokensLazyQuery } from '@demo-carbon-credit/database';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Page: NextPageWithLayout = () => {
  const { setModal } = useModalContext();
  const [user_id, setUserId] = useState('');
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [orgtableData, setOrgTableData] = useState<Array<any>>([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState<Array<any>>([]);
  const [searchKey, setSearchKey] = useState('n');

  const [getTokensLazyQuery, { data: mytokensdata, loading, error }] =
    useGettokensLazyQuery({
      variables: {
        user_id: localStorage.getItem('user_id'),
      },
      fetchPolicy: 'network-only',
    });
  var totaltokens = mytokensdata?.z_minttokens;
  console.log('totaltokens', totaltokens);
  useEffect(() => {
    getTokensLazyQuery();
  }, []);

  useEffect(() => {
    const Data: any[] = [];
    mytokensdata?.z_minttokens.map((v) => {
      Data.push(v);
    });
    console.log("Data",Data)
    const slice = Data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(Data.length / perPage));
    setOrgTableData(Data);
    setSearchData(Data);
    setTableData(slice);
  }, [mytokensdata?.z_minttokens]);

  // Initial call
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
  if (loading) return <div className="spinner"></div>

  return (
    <>
      <Table className="tablelist" responsive>
        <thead>
          <tr className="table_wrap">
            <th>Total Tokens</th>
            <th>Remaining Tokens</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((tx: any) => {
            return (
              <tr>
                <td>{tx.token}</td>
                <td>{tx.remaining_token}</td>
                <td>
                  <button
                    className="btn btn-selltoken table-btn"
                    onClick={() => {
                      setModal({
                        component: (
                          <SecondaryTransferModal
                            balance={tx.totalQuantity}
                            assetId={tx.id}
                            price={String(tx.initialPrice)}
                            totaltoken={tx.token}
                            remainingtoken={tx.remaining_token}

                          />
                        ),
                      });
                    }}
                  >
                    Sell Token
                  </button>
                </td>
              </tr>
            );
          })}
          {tableData?.length == 0 && (
            <tr>
              <td colSpan={12}>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {' '}
                  No Data Found
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
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
