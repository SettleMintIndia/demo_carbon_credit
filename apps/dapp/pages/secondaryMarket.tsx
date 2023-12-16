/* import {
  useGetAllSecondaryMarketPlaceLazyQuery,
  useGetUserByUsernameLazyQuery,
}  from '@demo-carbon-credit/database';*/
import React, { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import { Container, Row, Col, Table } from 'react-bootstrap';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SecondaryTokenTransaction } from '@demo-carbon-credit/components';
import CouponScheduleDetails from 'libs/components/src/lib/couponScheduleDetails';
const SecondaryMarket = () => {
  // Table and Pagination
  const { setModal, modal } = useModalContext();

  const formatter = new Intl.NumberFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    roundingMode: "ceil",
    maximumFractionDigits: 0,
    roundingIncrement: 1, 
  });

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');

  // New apis
  // Fetch require data for secondary market place data
  /* const [
    getAllSecondaryMarketPlaceQuery,
    {
      data: secondaryMarketPlaceData,
      loading: secondaryMarketPlaceDataLoading,
      error: secondaryMarketPlaceDataError,
    },
  ] = useGetAllSecondaryMarketPlaceLazyQuery({ fetchPolicy: 'network-only' });

  const [
    getUserByUsernameLazyQuery,
    { data: userDetail, loading: userDetailLoading, error: userDetailError },
  ] = useGetUserByUsernameLazyQuery({ fetchPolicy: 'network-only' }); */

  // API for purchase now

  // Initial call
  /* useEffect(() => {
    // Get user data by username
    getUserByUsernameLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    });
  }, []);
  console.log('user details', userDetail?.z_users);
  useEffect(() => {
    if (userDetail?.z_users[0]?.username !== undefined) {
      getAllSecondaryMarketPlaceQuery();
    }
  }, [userDetail?.z_users]);
 */
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

  // Set data in the table

 /*  useEffect(() => {
    // getAllSecondaryMarketListing()
    //   .then((res) => {
    setTableData(secondaryMarketPlaceData?.z_secondary_marketplace);
    setOrgTableData(secondaryMarketPlaceData?.z_secondary_marketplace);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, [secondaryMarketPlaceData?.z_secondary_marketplace]);

  console.log('tabledata', tableData);

  if (secondaryMarketPlaceDataLoading) return 'Loading...'; */
  return (
    <div>
      {/* Table + Pagination */}

      <Row>
        <div className="header-area">
          <h2>Secondary Market Place</h2>
        </div>
        <Row>
          <Table className="tablelist" responsive>
            <thead>
              <tr className="table_wrap">
                <th>Fund Name</th>
                <th>Seller</th>
                <th>Tokens for sale</th>
                <th>Per Token Value</th>
                <th>Price</th>
                <th>Listing Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
           {/*    {tableData?.map((v, i) => (
                <tr key={i} className="table_wrap">
                  <td>{v.z_asset.assetName}</td>
                  <td>{v.z_user_publisher.username}</td>
                  <td>{formatter.format(v.amount)}</td>
                  <td>{formatter.format(v.per_token_value)}</td>
                  <td>{formatter.format(v.price)}</td>
                  <td>{moment(String(v.created_at)).format('DD-MMM-YY')}</td>
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
                    {v.z_user_publisher.username !==
                      localStorage.getItem('user') ? (
                      <button
                        className="purchase_btn"
                        onClick={() => {
                          setModal({
                            component: (
                              <SecondaryTokenTransaction
                                assetId={v.z_asset.assetId}
                                sender={v.z_user_publisher.address}
                                senderId={v.z_user_publisher.id}
                                availableToken={v.amount}
                                price={v.per_token_value}
                                pvtKey={v.z_user_publisher.pvtKey}
                                id={v.id}
                                assetUUID={v.z_asset.id}
                              />
                            ),
                          });
                        }}
                      >
                        Purchase Now
                      </button>
                    ) :
                    (<button
                        className="purchase_btn"
                        disabled={true}
                        onClick={() => {
                          setModal({
                            component: (
                              <SecondaryTokenTransaction
                                assetId={v.z_asset.assetId}
                                sender={v.z_user_publisher.address}
                                senderId={v.z_user_publisher.id}
                                availableToken={v.amount}
                                price={v.per_token_value}
                                pvtKey={v.z_user_publisher.pvtKey}
                                id={v.id}
                                assetUUID={v.z_asset.id}
                              />
                            ),
                          });
                        }}
                      >
                        Disabled
                      </button>)}
                  </td>
                </tr>
              ))} */}
            </tbody>
          </Table>

          {tableData?.length != 0 && (
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
                  /* subContainerClassName={"pages pagination"} */
                  activeClassName={'active'}
                  forcePage={currentPage}
                />
              </div>
            </div>
          )}
        </Row>
      </Row>
    </div>
  );
};

export default SecondaryMarket;
