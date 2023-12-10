import { NextPageWithLayout } from './_app';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useModalContext } from '@demo-carbon-credit/providers';
import {
  useApproveDirectTransferMutation,
  useCheckRecordExistLazyQuery,
  useCreateTokenHolderMutation,
  useDeleteDirectTransactionMutation,
  useGetDirectTransactionByIsApprovedLazyQuery,
  useUpdateAdminBalanceMutation,
  useUpdateTokenHolderMutation,
} from '@demo-carbon-credit/database';
import { toast } from 'react-hot-toast';
const Page: NextPageWithLayout = () => {
  // Get approved transactions

  const [
    getDisApprovedDirectTransaction,
    {
      data: disApprovedDirectTransaction,
      loading: disApprovedDirectTransactionLoading,
      error: disApprovedDirectTransactionError,
    },
  ] = useGetDirectTransactionByIsApprovedLazyQuery({
    variables: {
      is_approved: false,
    },
    fetchPolicy: 'network-only',
  });

  // Get unapproved transactions
  const [
    getApprovedDirectTransaction,
    {
      data: approvedDirectTransactionData,
      loading: approvedDirectTransactionLoading,
      error: approvedDirectTransactionError,
    },
  ] = useGetDirectTransactionByIsApprovedLazyQuery({
    variables: {
      is_approved: true,
    },
    fetchPolicy: 'network-only',
  });
  // Approve the transaction
  const [
    approveDirectTransferMutation,
    {
      data: approveTransactionData,
      loading: approveTransactionDataLoading,
      error: approveTransactionDataError,
    },
  ] = useApproveDirectTransferMutation({});

  // Reject transaction
  const [
    deleteDirectTransactionMutation,
    {
      data: deleteDirectTransactionData,
      loading: deleteDirectTransactionLoading,
      error: deleteDirectTransactionError,
    },
  ] = useDeleteDirectTransactionMutation({});

  // Update admin balance after transaction
  const [
    updateAdminBalanceMutation,
    {
      data: updateAdminBalanceData,
      loading: updateAdminBalanceLoading,
      error: updateAdminBalanceError,
    },
  ] = useUpdateAdminBalanceMutation({});

  // Token holder API query

  const [
    checkRecordExistLazyQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useCheckRecordExistLazyQuery();

  const [
    createTokenHolderMutation,
    {
      data: createTokenHolderData,
      loading: createTokenHolderDataLoading,
      error: createTokenHolderDataError,
    },
  ] = useCreateTokenHolderMutation({});

  const [
    updateTokenHolderMutation,
    {
      data: updateTokenHolderData,
      loading: updateTokenHolderLoading,
      error: updateTokenHolderError,
    },
  ] = useUpdateTokenHolderMutation({});

  // Initial call

  useEffect(() => {
    // Get required data
    getDisApprovedDirectTransaction();
    getApprovedDirectTransaction();
  }, []);

  // Set approved and disapproved data in respective table
  useEffect(() => {
    setTableData(disApprovedDirectTransaction?.z_transaction_history);
    setOrgTableData(disApprovedDirectTransaction?.z_transaction_history);

    setTableData2(approvedDirectTransactionData?.z_transaction_history);
    setOrgTableData2(approvedDirectTransactionData?.z_transaction_history);
  }, [
    disApprovedDirectTransaction?.z_transaction_history,
    approvedDirectTransactionData?.z_transaction_history,
  ]);

  const { setModal } = useModalContext();

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');

  // Table 2

  const [searchData2, setSearchData2] = useState([]);
  const [offset2, setOffSet2] = useState(0);
  const [tableData2, setTableData2] = useState([]);
  const [orgtableData2, setOrgTableData2] = useState([]);
  const [perPage2, setPerPage2] = useState(20);
  const [currentPage2, setCurrentPage2] = useState(0);
  const [pageCount2, setPageCount2] = useState(0);
  const [searchKey2, setSearchKey2] = useState('n');

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

  const handlerowsperPage2 = (e) => {
    const showperpage = e.currentTarget.value;
    setPerPage2(parseInt(showperpage));
    setCurrentPage2(0);
    if (searchKey2 == 'y') {
      /*  const slice = searchKeyTable.slice(0, 0 + e.currentTarget.value);
       setPageCount(Math.ceil(searchKeyTable.length / e.currentTarget.value))
       setTableData(slice);
       setOffSet(0);
       setSearchData(searchKeyTable); */
    } else {
      const slice = orgtableData2.slice(0, 0 + e.currentTarget.value);
      setPageCount2(Math.ceil(orgtableData2.length / e.currentTarget.value));
      setTableData2(slice);
      setOffSet2(0);
      setSearchData2(orgtableData);
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
  const handlePageClick2 = (e) => {
    const selectedPage = e.selected;
    const offsetdata = selectedPage * perPage2;
    setCurrentPage2(selectedPage);
    setOffSet2(offsetdata);
    loadMoreData2(offsetdata);
  };

  const loadMoreData2 = (offsetdata) => {
    const data = orgtableData2;
    if (searchKey2 == 'y') {
      /*  const slice_det = searchKeyTable.slice(offsetdata, offsetdata + perPage);
       setPageCount(Math.ceil(searchKeyTable.length / perPage))
       setTableData(slice_det);
       setOffSet(offsetdata);
       setSearchData(searchKeyTable); */
    } else {
      const slice = data.slice(offsetdata, offsetdata + perPage2);
      setPageCount2(Math.ceil(data.length / perPage2));
      setOffSet2(offsetdata);
      setTableData2(slice);
      setSearchData2(data);
    }
  };

  // Approve transfer

  const approveTransfer = async (transferData: any) => {
    const settlement_date = Date.now().toString();
    console.log('Transfer data: ', transferData);
    let token = {
      amount: Number(transferData.amount),
      pvtkey: transferData.z_user_by_sender.pvtKey,
      assetId: Number(transferData.z_asset.assetId),
      sender: transferData.z_user_by_sender.address,
      reciever: transferData.z_user_by_receiver.address,
    };

    toast(
      <div className="loading_image">
        <img src="/transfer.gif" />
      </div>,
      {
        duration: 15000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    const timeout = setTimeout(async () => {
      const tx = await fetch('/api/transfer/transfer', {
        method: 'POST',
        body: JSON.stringify(token),
      })
        .then(async (response) => {
          // console.log('transfer response ', await response.json());
          const res = await response.json();

          approveDirectTransferMutation({
            variables: {
              id: transferData.id,
              settlement_date: settlement_date,
              blockNumber: String(res.blockNumber),
              txHash: res.hash,
            },
          })
            .then(async (res) => {
              // Apply the logic of token holder

              /*
                First we have to check if the same data is exist (2 times ).

              */

              // For admin
              await checkRecordExistLazyQuery({
                variables: {
                  assetId: transferData?.z_asset.id,
                  userId: transferData?.z_user_by_sender.id,
                },
                fetchPolicy: 'network-only',
              }).then((res) => {
                if (res?.data?.z_token_holder[0]?.id === undefined) {
                  //Create Admin
                  console.log('admin create', res.data.z_token_holder);
                  createTokenHolderMutation({
                    variables: {
                      amount: transferData?.amount,
                      assetId: transferData?.z_asset?.id,
                      userId: transferData?.z_user_by_sender?.id,
                    },
                  });
                } else {
                  // Update admin
                  console.log('admin update', res.data.z_token_holder);
                  updateTokenHolderMutation({
                    variables: {
                      id: res.data?.z_token_holder[0].id,
                      amount: String(
                        Number(res.data?.z_token_holder[0].amount) -
                          Number(token?.amount)
                      ),
                    },
                  });
                }
              });

              // For User
              await checkRecordExistLazyQuery({
                variables: {
                  assetId: transferData?.z_asset.id,
                  userId: transferData?.z_user_by_receiver.id,
                },
                fetchPolicy: 'network-only',
              }).then((res) => {
                if (res?.data?.z_token_holder[0]?.id === undefined) {
                  console.log('user create', res.data.z_token_holder);
                  // Create user
                  createTokenHolderMutation({
                    variables: {
                      amount: transferData?.amount,
                      assetId: transferData?.z_asset?.id,
                      userId: transferData?.z_user_by_receiver?.id,
                    },
                  });
                } else {
                  // Update user
                  console.log('user update', res.data.z_token_holder);
                  updateTokenHolderMutation({
                    variables: {
                      id: res.data?.z_token_holder[0].id,
                      amount: String(
                        Number(res.data?.z_token_holder[0].amount) +
                          Number(token?.amount)
                      ),
                    },
                  });
                }
              });

              toast.dismiss();
              return res;
            })
            .then(async (res) => {
              toast(
                <div className="loading_image">
                  <img src="/transferSuccess.gif" />
                </div>,
                {
                  duration: 2000,
                }
              );
              clearTimeout(timeout);

              // Update admin data
              // const adminData = await updateAdminBalanceMutation({
              //   variables: {
              //     id: transferData.z_asset.id,
              //     adminBalance: String(
              //       Number(transferData.z_asset.adminBalance) -
              //         Number(transferData.amount)
              //     ),
              //   },
              // });
              getDisApprovedDirectTransaction();
              getApprovedDirectTransaction();
              return res.data;
            })
            .catch((err) => {
              toast.error(`Cannot transfer, please try again later.${err}`);
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    }, 4100);
  };

  // Reject transfer

  const rejectTransfer = async (id: string) => {
    deleteDirectTransactionMutation({
      variables: {
        id: id,
      },
    })
      .then((res) => {
        getDisApprovedDirectTransaction();
        getApprovedDirectTransaction();
        return res.data.delete_z_transaction_history_by_pk.id;
      })
      .catch((err) => {
        return err;
      });
  };

  if (disApprovedDirectTransactionLoading && approvedDirectTransactionLoading)
    return <p>Loading...</p>;

  return (
    <>
      <div>
        {/* Pending Transfers Table */}
        <Row>
          <div className="header-area">
            <h2>Token Transfer Request</h2>
          </div>
          <Row>
            <Table className="tablelist" responsive>
              <thead>
                <tr className="table_wrap">
                  <th>Fund Name</th>
                  <th>Tokens</th>
                  <th>Request Creation Date</th>
                  <th>Sender</th>
                  <th>Recipient</th>

                  <th></th>
                </tr>
              </thead>

              <tbody>
                {tableData?.map((v, i) => (
                  <tr key={i} className="table_wrap">
                    <td>{v.z_asset.assetName}</td>
                    <td>{v.amount}</td>
                    <td>{moment(String(v.created_at)).format('DD-MMM-YY')}</td>

                    <td>{v.z_user_by_sender.username}</td>
                    <td>{v.z_user_by_receiver.username}</td>

                    <td className="text-right">
                      <button
                        className=" approve_btn btn-success"
                        onClick={() => {
                          approveTransfer(v);
                          // toast.promise(approveTransfer(v), {
                          //   loading: 'Approving...',
                          //   success: (data) => {
                          //     return 'Approved';
                          //   },
                          //   error: (err) =>
                          //     `Cannot Approve, please try again later.${err}`,
                          // });
                        }}
                      >
                        Approve
                      </button>{' '}
                      &nbsp;
                      <button
                        className=" reject_btn btn-danger"
                        onClick={() => {
                          toast.promise(rejectTransfer(v.id), {
                            loading: 'Rejecting...',
                            success: (data) => {
                              return 'Rejected';
                            },
                            error: (err) =>
                              `Cannot Reject, please try again later.${err}`,
                          });
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
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

        {/* Completed Transfers Table */}

        <Row>
          <div className="header-area">
            <h2>Completed Token Transfers</h2>
          </div>
          <Row>
            <Table className="tablelist" responsive>
              <thead>
                <tr className="table_wrap">
                  <th>Fund Name</th>
                  <th>Tokens</th>
                  <th>Request Creation Date</th>
                  <th>Settlement Date</th>
                  <th>Sender</th>
                  <th>Recipient</th>
                  <th>txHash</th>
                </tr>
              </thead>
              {tableData2?.map((v, i) => (
                <tr key={i} className="table_wrap">
                  <td>{v.z_asset.assetName}</td>
                  <td>{v.amount}</td>
                  <td>
                    {moment(String(v.created_at)).format('DD-MMM-YY, HH:mm')}
                  </td>
                  <td>
                    {moment(Number(v.settlement_date)).format(
                      'DD-MMM-YY, HH:mm'
                    )}
                  </td>

                  <td>{v.z_user_by_sender.username}</td>
                  <td>{v.z_user_by_receiver.username}</td>
                  <td>
                    <div className="token-address">
                      <a
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_EXPLORER_HOST}/tx/${v.txHash}`}
                      >
                        {v.txHash}
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </Table>

            {tableData2?.length != 0 && (
              <div className="pagging-area pagging-trans">
                <div className="pagination_row_div">
                  <p className="pagination_title">Showing items per page:</p>
                  <div className="pagination_input_div">
                    <select
                      className="pagination_select"
                      style={{ margin: 0, background: 'transparent' }}
                      name="pagination_value"
                      value={perPage2}
                      onChange={handlerowsperPage2}
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
                    {searchData2.length < offset2 + perPage2 && (
                      <span>{searchData2.length}</span>
                    )}
                    {searchData2.length > offset2 + perPage2 && (
                      <span>{offset2 + perPage2} </span>
                    )}{' '}
                    of {searchData2.length} items
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
                    pageCount={pageCount2}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick2}
                    containerClassName={'pagination'}
                    /* subContainerClassName={"pages pagination"} */
                    activeClassName={'active'}
                    forcePage={currentPage2}
                  />
                </div>
              </div>
            )}
          </Row>
        </Row>
      </div>
    </>
  );
};
export default Page;
