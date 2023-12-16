/* import { useGetAllTransactionLazyQuery } from '@demo-carbon-credit/database';
 */import { NextPageWithLayout } from './_app';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

const Page: NextPageWithLayout = () => {

  const formatter = new Intl.NumberFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    roundingMode: "ceil",
    maximumFractionDigits: 0,
    roundingIncrement: 1, 
  });

  const [transaction, setTransaction] = useState<Array<any>>([]);
  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');

  // Get all transactions
  /* const [getAllTransactionLazyQuery, { data, loading, error }] =
    useGetAllTransactionLazyQuery({
      variables: {},
      fetchPolicy: 'network-only',
    });

  // Initial call
  useEffect(() => {
    getAllTransactionLazyQuery();
  }, []);

  //0x0000000000000000000000000000000000000
  useEffect(() => {
    const Data: any[] = [];
    data?.z_transaction_history.map((v) => {
      Data.push(v);
    });
    const sortArray = Data?.sort((a, b) => {
      return b.blockNumber - a.blockNumber;
    });
    setTransaction([...sortArray]);
    console.log(sortArray);
    const slice = sortArray.slice(offset, offset + perPage);
    setPageCount(Math.ceil(sortArray.length / perPage));
    setOrgTableData(sortArray);
    setSearchData(sortArray);
    setTableData(slice);
  }, [data?.z_transaction_history]);

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

  console.log('transaction log', tableData); */
  //if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="header-area">
        <h2>Transaction Log</h2>
      </div>
      <Row>
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Type</th>
              <th>txHash</th>
              <th>BlockNumber</th>
              <th>Time</th>
            </tr>
          </thead>
         {/*  {tableData?.filter((item) =>  (localStorage.getItem('user') === item.z_user_by_receiver
.username || localStorage.getItem('user') === item.z_user_by_sender
.username) || localStorage.getItem('user') === 'admin').map((v, i) => (
            <tr key={v.id} className="table_wrap">
              <td>
                <div className="token-address">
                  
                  <Link
                    target="_blank"
                    href={`https://explorer-1305.gke-europe.settlemint.com/address/${v?.z_user_by_sender.address}`}
                  >
                    {v?.z_user_by_sender.username}
                  </Link>
                </div>
              </td>
              <td>
                <div className="token-address">
                  <Link
                    target="_blank"
                    href={`https://explorer-1305.gke-europe.settlemint.com/address/${v?.z_user_by_receiver.address}`}
                  >
                    {v?.z_user_by_receiver.username}
                  </Link>
                </div>
              </td>
              <td>{v?.amount ? formatter.format(v.amount) : 'null'}</td>
              <td>{v?.type === 'direct' ? 'Primary' : 'Secondary'}</td>
              <td>
                <div className="token-address">
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_EXPLORER_HOST}/tx/${v?.txHash}`}
                  >
                    {v?.txHash}
                  </Link>
                </div>
              </td>
              <td>
                <Link
                  target="_blank"
                  href={`https://explorer-1305.gke-europe.settlemint.com/block/${v?.blockNumber}`}
                >
                  {v?.blockNumber}
                </Link>
              </td>
              <td>
                {v.type === 'direct'
                  ? moment(Number(v.settlement_date)).format('DD-MM-YY')
                  : moment(String(v.created_at)).format('DD-MM-YY')}
              </td>
            </tr>
          ))} */}
        </Table>

     {/*    {tableData.length != 0 && (
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
        )} */}
      </Row>
    </>
  );
};
export default Page;
