import { useGetAllTransactionsLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Table, Row } from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Page: NextPageWithLayout = () => {
  // Fetch assets data
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [orgtableData, setOrgTableData] = useState<Array<any>>([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState<Array<any>>([]);
  const [searchKey, setSearchKey] = useState('n');


  const [getAllTransactionLazyQuery, { data: transaction, loading, error }] =
    useGetAllTransactionsLazyQuery({
      variables: {},
      fetchPolicy: 'network-only',
    });

  var totalTransactions = transaction?.z_transaction_history;
  console.log(totalTransactions);
  // Initial call
  useEffect(() => {
    getAllTransactionLazyQuery();
  }, []);

  useEffect(() => {
    const Data: any[] = [];
    transaction?.z_transaction_history.map((v) => {
      Data.push(v);
    });
    console.log("Data",Data)
    const slice = Data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(Data.length / perPage));
    setOrgTableData(Data);
    setSearchData(Data);
    setTableData(slice);
  }, [transaction?.z_transaction_history]);

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
  return (
    <>
      <div className="header-area">
       
      </div>
      <Row>
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>From</th>
              <th>To</th>
              <th>Token</th>
              <th>Amount</th>
              <th>txHash</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((v, i) => (
              <tr key={v.id} className="table_wrap">
                <td>
                  <div className="token-address">
                    <Link
                      target="_blank"
                      href={`https://explorer-1305.gke-europe.settlemint.com/address/${v?.z_user_sender.address}`}
                    >
                      {v?.z_user_sender.username}
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="token-address">
                    <Link
                      target="_blank"
                      href={`https://explorer-1305.gke-europe.settlemint.com/address/${v?.z_user_receiver.address}`}
                    >
                      {v?.z_user_receiver.username}
                    </Link>
                  </div>
                </td>
                <td>{v?.token}</td>
                <td>{v?.amount}</td>
                <td>
                  <div className="token-address">
                    <Link
                      target="_blank"
                      href={`${process.env.NEXT_PUBLIC_EXPLORER_HOST}/tx/${v?.tx_hash}`}
                    >
                      {v?.tx_hash}
                    </Link>
                  </div>
                </td>
                <td>{moment(String(v.created_at)).format('DD-MMM-YY')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
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
