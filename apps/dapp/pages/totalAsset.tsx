import {
  useGetMintedTokenDataLazyQuery,
  useGetAllTokenHolderDetailsLazyQuery,
} from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useModalContext } from '@demo-carbon-credit/providers';
import { Dropdown } from '@nextui-org/react';
import Profit from 'libs/components/src/lib/profit';
import ProfitDistribution from 'libs/components/src/lib/profitDistribution';
import CreatePollModal from 'libs/components/src/lib/poll/createPollModal';
import ViewPollsModal from 'libs/components/src/lib/poll/viewPollsModal';
import {
  PrimaryTokenTransaction,
  Token,
  TokenTransaction,
  Transfer,
} from '@demo-carbon-credit/components';
// import TokenTransaction from 'libs/components/src/lib/tokenTransaction';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CouponScheduleDetails from 'libs/components/src/lib/couponScheduleDetails';
import { assert } from 'console';
const Page: NextPageWithLayout = () => {
  // Get tokenized funds data
  const [
    getMintedTokenDataLazyQuery,
    { data: fundData, loading: fundDataLoading, error: fundDataError },
  ] = useGetMintedTokenDataLazyQuery({
    fetchPolicy: 'network-only',
  });

  // Get Initial data
  useEffect(() => {
    getMintedTokenDataLazyQuery();
  }, []);

  const { setModal } = useModalContext();

  const [selectedAction, setSelectedAction] = useState(null);

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');

  // console.log('block chain data', data?.erc1155Tokens);

  const [
    getAllTokenHolderDetailsLazyQuery,
    {
      data: tokenHoldersData,
      loading: tokenHoldersDataLoading,
      error: tokenHoldersDataError,
    },
  ] = useGetAllTokenHolderDetailsLazyQuery({
    fetchPolicy: 'network-only',
  });

  // initial call
  useEffect(() => {
    getAllTokenHolderDetailsLazyQuery();
  }, []);

  useEffect(() => {
    const Data: any[] = [];
    // Set holders data
    fundData?.z_assets.map((v) => {
      let holders: any = [];
      holders = tokenHoldersData?.z_token_holder.filter(
        (h) => h.z_asset.assetId === v.assetId
      );
      console.log("holders", tokenHoldersData);

      if (holders) {
        Data.push({ ...v, countHolder: holders.length });
      }
    });

    const sortArray = Data?.sort((a, b) => {
      return b.tokenId - a.tokenId;
    });
    // setTransaction([...sortArray]);
    const slice = sortArray.slice(offset, offset + perPage);
    setPageCount(Math.ceil(sortArray.length / perPage));
    setOrgTableData(sortArray);
    setSearchData(sortArray);
    setTableData(slice);
    // }, [data?.erc1155Tokens, nameDate?.minted, CouponData?.assets]);
  }, [fundData?.z_assets, tokenHoldersData?.z_token_holder]);

  console.log('Table data', tableData);
  const handlerowsperPage = (e) => {
    const showperpage = e.currentTarget.value;
    setPerPage(parseInt(showperpage));
    setCurrentPage(0);
    if (searchKey == 'y') {
      /*  const slice = searchKeyTable.slice(0, 0 + e.currentTarget.value);
       setPageCount(Math.ceil(searchKeyTable.length / e.currentTarget.value))
       setTableData(slice);
       setOffSet(0);
       setSearchData(searchKeyTable); */
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
      /*  const slice_det = searchKeyTable.slice(offsetdata, offsetdata + perPage);
       setPageCount(Math.ceil(searchKeyTable.length / perPage))
       setTableData(slice_det);
       setOffSet(offsetdata);
       setSearchData(searchKeyTable); */
    } else {
      const slice = data.slice(offsetdata, offsetdata + perPage);
      setPageCount(Math.ceil(data.length / perPage));
      setOffSet(offsetdata);
      setTableData(slice);
      setSearchData(data);
    }
  };
  const formatter = new Intl.NumberFormat('en-US');

  const changeSelectedRow = (data: any) => {
    if (selectedAction === null || data != selectedAction) {
      setSelectedAction(data);
    }
    if (data === selectedAction) {
      setSelectedAction(null);
    }
  };

  console.log('table data', tableData);

  if (fundDataLoading) return <p>loading...</p>;

  return (
    <>
      <div className="header-area">
        <h2>Tokenized Funds</h2>
      </div>
      <Row>
        <Col className="table_head">
          <Table className="tablelist" responsive>
            <thead>
              <tr className="table_wrap">
                <th>Fund Name</th>
                <th>Fund Size</th>
                <th>Per Token Value</th>
                <th>Last Traded Price</th>
                <th>Minted</th>
                <th>Treasury Balance</th>

                {localStorage.getItem('user') === 'admin' && (
                  <>
                    <th>Holders</th>
                  </>
                )}
                {/* <th>Burned</th> */}

                {/* <th>Coupon Rate</th> */}
                {/* <th>Buy Price</th>
                <th>Sell Price</th> */}
                {/* <th>Maturity Date</th> */}
                {/* <th>Transfer</th> */}
                <th></th>
              </tr>
            </thead>
            {tableData?.map((v, i) => (
              <>
                <tr key={i} className="table_wrap">
                  {/* <td>{v?.tokenId}</td> */}
                  <td>
                    {/* {v?.Name.length > 15
                        ? `${v?.Name.slice(0, 8)}.....${v.Name.slice(
                            v?.Name.length - 8,
                            v?.Name.length
                          )} `
                        : v?.Name} */}
                    {v.assetName}
                  </td>

                  {/* <td>{v.assetValue}</td> */}
                  <td>{formatter.format(Number(v.totalCapital))}</td>
                  <td>
                    {/* {formatter.format} */}
                    {formatter.format(Number(v.sellPrice))}
                  </td>

                  {/* <td>{formatter.format(v?.activeSupply - v?.burned)}</td> */}
                  <td>{formatter.format(v?.last_traded_price)}</td>
                  <td>{formatter.format(v?.totalMinted)}</td>
                  {/* Face value */}

                  <td>
                    {/* {getTokenData(v.tokenId) &&
                      getTokenData(v.tokenId).find(
                        (item) =>
                          item.Name.toLowerCase() === 'admin'.toLowerCase()
                      )?.balance} */}
                    <span className="t-balance">{formatter.format(v.adminBalance)}</span>
                  </td>

                  {localStorage.getItem('user') === 'admin' && (
                    <>
                      <td>

                      {v.countHolder}
                      </td>
                      {/* <td>{v?.burned}</td> */}
                    </>
                  )}
                  {/* <td>{v?.couponRate}%</td> */}
                  {/* <td>{v?.buyPrice}</td>
                  <td>{v?.SellPrice}</td> */}

                  {/* <td>
                      {moment(String(v?.maturityRate)).format('DD-MMM-YY')}
                    </td> */}
                  <td className="text-right">
                    {localStorage.getItem('user') !== 'admin' && (
                      <></>
                      // <button
                      //   className="btn btn-viewmore table-btn"
                      //   onClick={() => {
                      //     setModal({
                      //       component: (
                      //         <CouponScheduleDetails bondName={v.name} />
                      //       ),
                      //     });
                      //   }}
                      // >
                      //   View Coupon Schedule
                      // </button>
                    )}{' '}
                    {localStorage.getItem('user') !== 'admin' && (
                      <button
                        className="purchase_btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <PrimaryTokenTransaction
                                assetId={v.assetId}
                                availableToken={v.adminBalance}
                                price={v.sellPrice}
                                assetUUID={v.id}
                              />
                            ),
                          });
                        }}
                      >
                        Purchase Now
                      </button>
                    )}{' '}
                    {localStorage.getItem('user') === 'admin' && (
                      <>
                        <button
                          className="action_btn transfer_btn"
                          onClick={() => {
                            setModal({
                              component: (
                                <Transfer
                                  price={v.sellPrice}
                                  assetId={v?.id}
                                  name={v?.assetName}
                                  balance={v.adminBalance}
                                />
                              ),
                            });
                          }}
                        >
                          Direct Transfer
                        </button>
                        <button
                          className="action_btn holder_btn"
                          onClick={() => {
                            setModal({
                              component: <Token assetUUID={v?.id} />,
                            });
                          }}
                        >
                          Holders
                        </button>

                        <span
                          className="expand_action_btn"
                          onClick={() => changeSelectedRow(i)}
                        >
                          {' '}
                          {selectedAction && i == selectedAction ? (
                            <ExpandLessIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </span>
                        {/* <button
                            className="action_btn coupon_btn"
                            onClick={() => {
                              setModal({
                                component: (
                                  <CouponScheduleDetails bondName={v.Name} />
                                ),
                              });
                            }}
                          >
                            Coupon Schedule
                          </button> */}
                        {/* Modal to create profit distribution */}
                        {/* <button
                            className="action_btn profit_btn"
                            onClick={() => {
                              setModal({
                                component: (
                                  <Profit
                                    assetId={v?.tokenId}
                                    assetName={v.Name}
                                    totalHolders={String(v?.owner.length - 1)}
                                  />
                                ),
                              });
                            }}
                          >
                            Add Profit
                          </button>
                          <button
                            className="action_btn profit_btn"
                            onClick={() => {
                              setModal({
                                component: (
                                  <ProfitDistribution assetId={v?.tokenId} />
                                ),
                              });
                            }}
                          >
                            View Profit Distribution
                          </button>
                          <button
                            className="action_btn poll_btn"
                            onClick={() => {
                              setModal({
                                component: (
                                  <CreatePollModal
                                    assetId={v?.tokenId}
                                    assetName={v.Name}
                                  />
                                ),
                              });
                            }}
                          >
                            Add Poll
                          </button>
                          <button
                            className="action_btn poll_btn"
                            onClick={() => {
                              setModal({
                                component: (
                                  <ViewPollsModal assetId={v?.tokenId} />
                                ),
                              });
                            }}
                          >
                            View Polls
                          </button> */}
                      </>
                    )}
                  </td>
                </tr>
                {i === selectedAction &&
                  localStorage.getItem('user') === 'admin' && (
                    <tr className="expand_box_row">
                      <td colSpan={9}>
                        <div className="expand_box">
                          {localStorage.getItem('user') === 'admin' && (
                            <>
                              <div className="row">
                                <div className="col-md-6 text-right px-4">
                                  <button
                                    className="action_btn profit_btn dropdown_btn"
                                    onClick={() => {
                                      setModal({
                                        component: <Profit asset={v} />,
                                      });
                                    }}
                                  >
                                    Add Profit
                                  </button>
                                  <button
                                    className="action_btn profit_btn dropdown_btn"
                                    onClick={() => {
                                      setModal({
                                        component: (
                                          <ProfitDistribution assetId={v?.id} />
                                        ),
                                      });
                                    }}
                                  >
                                    View Profit Distribution
                                  </button>
                                </div>
                                <div className="col-md-6  text-left px-4">
                                  <button
                                    className="action_btn poll_btn dropdown_btn"
                                    onClick={() => {
                                      setModal({
                                        component: (
                                          <CreatePollModal
                                            id={v?.id}
                                            username={localStorage.getItem(
                                              'user'
                                            )}
                                          />
                                        ),
                                      });
                                    }}
                                  >
                                    Add Poll
                                  </button>
                                  <button
                                    className="action_btn poll_btn dropdown_btn"
                                    onClick={() => {
                                      setModal({
                                        component: (
                                          <ViewPollsModal id={v?.id} />
                                        ),
                                      });
                                    }}
                                  >
                                    View Polls
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
              </>
            ))}
          </Table>
          {tableData.length != 0 && (
            <div className="pagging-area">
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
                  /* subContainerClassName={"pages pagination"} */
                  activeClassName={'active'}
                  forcePage={currentPage}
                />
              </div>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Page;
