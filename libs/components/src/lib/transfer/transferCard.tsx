/* import {
  useGetTransactionHistoryByReceiverLazyQuery,
  useGetTransactionHistoryBySenderLazyQuery,
} from '@demo-carbon-credit/database'; */
import { ChangeEvent, useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import { IMint } from '../mint/tokencard';
import { Link } from '@mui/material';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TranferBatch } from './transferBatch';
import { SecondaryTransferModal } from '../secondaryTransferModal';
import CouponScheduleDetails from '../couponScheduleDetails';
import ViewPollsModal from 'libs/components/src/lib/poll/viewPollsModal';
import ProfitDistribution from 'libs/components/src/lib/profitDistribution';
interface Icard {
  assetid: string;
  balance: string;
  tx: string;
  name: string;
}

interface Ihash {
  blockHash: string;
  hash: string;
  blockNumber: string;
  from: string;
  to: string;
}

export const TransferCard = () => {
  const [newTD, setNewTD] = useState([]);
  const [amount, setAmount] = useState<Array<number>>([]);
  const [cardData, setData] = useState<Array<Icard>>([]);
  const [hashData, setHash] = useState<Ihash | undefined>(undefined);
  const [showmodal, setModalClose] = useState(false);
  const [asset_id, setasset_id] = useState('');
  const [amount_transfer, setamount_transfer] = useState('');

  const [searchData, setSearchData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [orgtableData, setOrgTableData] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState('n');
  const [searchKeyTable, setSearchKeyTable] = useState('');
  const [avgArray, setAvgArray] = useState([]);

  const mint: IMint[] = [];

  const { setModal } = useModalContext();

  useEffect(() => {
    const tempArray: Icard[] = [];
    newTD.map((v) => {
      tempArray.push(v);
    });
    setData([...tempArray]);
    const slice = tempArray.slice(offset, offset + perPage);
    setPageCount(Math.ceil(tempArray.length / perPage));
    setOrgTableData(tempArray as any);
    setTableData(slice as any);
    setSearchData(tempArray as any);
    // console.log(nameDate);
  }, [newTD]);

  const handleOnChange = (response: boolean, id: string, amount: number) => {
    const obj = {
      assetID: Number(id),
      amount: amount,
    };
    if (response === true) {
      mint?.push(obj);
      const cartJson = JSON.stringify(mint);
      sessionStorage.setItem('cart', cartJson);
      console.log(sessionStorage.getItem('cart'));
    } else {
      const index = mint?.findIndex((object) => {
        return object?.assetID === Number(id);
      });
      console.log(index);
      mint?.splice(Number(index), 1);
      const cartJson = JSON.stringify(mint);
      sessionStorage.setItem('cart', cartJson);
      console.log(sessionStorage.getItem('cart'));
    }
  };

  // Get transaction history by sender using username
  /* const [
    getTransactionHistoryByReceiverQuery,
    {
      data: transactionHistoryByReceiverData,
      loading: transactionHistoryByReceiverDataLoading,
      error: transactionHistoryByReceiverDataError,
    },
  ] = useGetTransactionHistoryByReceiverLazyQuery({
    fetchPolicy: 'network-only',
  }); */

  // const [
  //   useGetTransactionHistoryByRecieverQuery,
  //   {
  //     data: txHistory,
  //     loading: txLoading,
  //     error: txError,
  //   },
  // ] = useGetTransactionHistoryByRecieverQuery({
  //   fetchPolicy: 'network-only',
  // });
  
  

  // Get transaction history by receiver using username
/*   const [
    getTransactionHistoryBySenderLazyQuery,
    {
      data: getTransactionHistoryBySenderData,
      loading: getTransactionHistoryBySenderDataLoading,
      error: getTransactionHistoryBySenderDataError,
    },
  ] = useGetTransactionHistoryBySenderLazyQuery({
    fetchPolicy: 'network-only',
  });
  // Initial call
  useEffect(() => {
    getTransactionHistoryByReceiverQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    });

    getTransactionHistoryBySenderLazyQuery({
      variables: {
        username: localStorage.getItem('user'),
      },
    });
  }, []); */

  // Calculate the asset amount of a user (using useEffect)

  const [stateAverageTokenCostArray, setStateAverageTokenCostArray] =
    useState(null);

  const [stateTotalInvestment, setStateTotalInvestment] = useState(0);
  const [stateTotalMarketValueArray, setStateTotalMarketValueArray] =
    useState(null);

  const [stateTotalMarketValue, setStateTotalMarketValue] = useState(0);

  const calculateSumByAsset = (data: any) => {
    const assetAmounts = {};

    for (const item of data) {
      const assetId = item.z_asset.assetId;
      const amount = parseInt(item.amount);

     /*  if (assetAmounts.hasOwnProperty(assetId)) {
        assetAmounts[assetId] += amount;
      } else {
        assetAmounts[assetId] = amount;
      } */
    }

    return assetAmounts;
  };

  // console.log('avg avg', stateAverageTokenCostArray);
  const calculateAverageTokenCost = (data: any) => {
    const avgTokenCost = {};
    for (const item of data) {
      const assetId = item.z_asset.assetId;

      const perAvgTokenCost = parseInt(item.amount) * parseInt(item.price);
      let totalAmount = 0;
      // console.log('avg avg item', item);
    /*   if (avgTokenCost.hasOwnProperty(assetId)) {
        avgTokenCost[assetId] += perAvgTokenCost;
        totalAmount += parseInt(item.amount);
      } else {
        avgTokenCost[assetId] = perAvgTokenCost;
        totalAmount = parseInt(item.amount);
      }
      avgTokenCost[assetId] = avgTokenCost[assetId] / totalAmount; */
    }
    return avgTokenCost;
  };

  const calculateCurrentMarketValue = (data: any) => {
    const totalMarketValue = {};
    for (const item of data) {
      const assetId = item.z_asset.assetId;

      const perCurrentMarketValue =
        parseInt(item.amount) * parseInt(item.z_asset.last_traded_price);

    /*   if (totalMarketValue.hasOwnProperty(assetId)) {
        totalMarketValue[assetId] += perCurrentMarketValue;
      } else {
        totalMarketValue[assetId] = perCurrentMarketValue;
      } */
    }
    return totalMarketValue;
  };

/*   useEffect(() => {
    // Generate appropriate table

    if (
      transactionHistoryByReceiverData?.z_transaction_history &&
      getTransactionHistoryBySenderData?.z_transaction_history
    ) {
      // *************** update the amount for receiver *****************

      // This will smm up the unique asset by receiver
      const calculatedReceiverAmount = calculateSumByAsset(
        transactionHistoryByReceiverData?.z_transaction_history
      );
      const uniqueReceiver = [
        ...new Map(
          transactionHistoryByReceiverData?.z_transaction_history.map(
            (item) => [item.z_asset['assetId'], item]
          )
        ).values(),
      ];

      // Final calculated receiver object
      uniqueReceiver.forEach((item) => {
        item.amount = calculatedReceiverAmount[item.z_asset.assetId];
      });

      console.log('unique receiver', uniqueReceiver);

      //****************** Update the amount for  sender ********************

      // // This will smm up the unique asset by sender
      const calculatedSenderAmount = calculateSumByAsset(
        getTransactionHistoryBySenderData?.z_transaction_history
      );

      const uniqueSender = [
        ...new Map(
          getTransactionHistoryBySenderData?.z_transaction_history.map(
            (item) => [item.z_asset['assetId'], item]
          )
        ).values(),
      ];

      // Final calculated sender object
      uniqueSender.forEach((item) => {
        item.amount = calculatedSenderAmount[item.z_asset.assetId];
      });

      console.log('unique sender', uniqueSender);

      // final logic for table (it will update the amount)

      uniqueReceiver.forEach((receiver) => {
        uniqueSender.forEach((sender) => {
          if (receiver.z_asset.assetId === sender.z_asset.assetId) {
            receiver.amount = String(
              Number(receiver.amount) - Number(sender.amount)
            );
          }
        });
      });

      // Set in new table data
      setNewTD(uniqueReceiver as any);

      // Calculate and set average token cost

      const calculatedAvgTokenCost = calculateAverageTokenCost(
        transactionHistoryByReceiverData?.z_transaction_history
      );
      setStateAverageTokenCostArray(calculatedAvgTokenCost);

      // Calculate current market value

      const calculatedTotalMarketValue =
        calculateCurrentMarketValue(uniqueReceiver);
      setStateTotalMarketValueArray(calculatedTotalMarketValue);
    }
  }, [
    transactionHistoryByReceiverData?.z_transaction_history,
    getTransactionHistoryBySenderData?.z_transaction_history,
  ]);

  console.log(
    'avg avg tx history',
    transactionHistoryByReceiverData?.z_transaction_history
  );
 */
  // Calculate total investment
  useEffect(() => {
    // if (stateAverageTokenCostArray) {
    //   let tempTotalInvestment = 0;
    //   for (const key in stateAverageTokenCostArray) {
    //     // if (data.hasOwnProperty(key)) {
    //     const value = stateAverageTokenCostArray[key];
    //     console.log('vvv', key, value);
    //     tempTotalInvestment += parseInt(value);
    //   }
    //   setStateTotalInvestment(tempTotalInvestment);
    // }

    // Calculate average token cost
    // stateAverageTokenCostArray[v?.z_asset.assetId]
    if (stateAverageTokenCostArray && tableData) {
      let avgTemp = 0;
    /*   tableData.forEach((token) => {
        avgTemp +=
          token.amount * stateAverageTokenCostArray[token?.z_asset?.assetId];
      }); */
      console.log('avg', avgTemp);
      setStateTotalInvestment(avgTemp);
    }
  }, [stateAverageTokenCostArray, tableData]);
  console.log(stateTotalInvestment);
  // Calculate total market value
  useEffect(() => {
    if (stateTotalMarketValueArray) {
      let tempTotalMarketValue = 0;
     /*  for (const key in stateTotalMarketValueArray) {
        // if (data.hasOwnProperty(key)) {
        const value = stateTotalMarketValueArray[key];
        console.log('vvv', key, value);
        tempTotalMarketValue += parseInt(value);
      } */
      setStateTotalMarketValue(tempTotalMarketValue);
    }

    // Calculate total investment
    tableData.forEach((token) => {
      console.log('tt', token);
    });
  }, [stateTotalMarketValueArray, tableData]);

  const handleClose = async (tx_hash: string) => {
    setModalClose(false);
  };

  const txClick = async (tx_hash: string) => {
    console.log(tx_hash);
    const tx = await fetch(`/api/getTransaction/${tx_hash}`).then(
      (response) => {
        return response.json();
      }
    );
    console.log(tx?.result);

    setHash({
      blockHash: tx?.result?.blockHash,
      hash: tx?.result?.hash,
      blockNumber: tx?.result?.blockNumber,
      from: tx?.result?.from,
      to: tx?.result?.to,
    });
  };

  const handlerowsperPage = (e: any) => {
    const showperpage = e.currentTarget.value;
    setPerPage(parseInt(showperpage));
    setCurrentPage(0);
    if (searchKey == 'y') {
      /* const slice = searchKeyTable.slice(0, 0 + e.currentTarget.value);
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
  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    const offsetdata = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffSet(offsetdata);
    loadMoreData(offsetdata);
  };

  const loadMoreData = (offsetdata: any) => {
    const data = orgtableData;
    if (searchKey == 'y') {
      /*  const slice = searchKeyTable.slice(offsetdata, offsetdata + perPage);
       setPageCount(Math.ceil(searchKeyTable.length / perPage))
       setTableData(slice);
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
  const formatter = new Intl.NumberFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // roundingMode: "ceil",
    // maximumFractionDigits: 0,
    // roundingIncrement: 1, 
  });

  console.log('table data', tableData);
  /* if (
    transactionHistoryByReceiverDataLoading ||
    getTransactionHistoryBySenderDataLoading
  )
    return <p>Loading...</p>;
    transactionHistoryByReceiverData?.z_transaction_history.map(item => {
      console.log("item here", item)
      return item;
    }); */

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {newTD.length != 0 ? (
        <Row>
          <div className="header-area">
            {/* <div className="add-btn">
              {localStorage.getItem('user') === 'admin' && (
                <button
                  className="create-btn"
                  onClick={() =>
                    setModal({
                      component: <TranferBatch />,
                    })
                  }
                >
                  Batch Transfer
                </button>
              )}
            </div> */}
            <h2>Tokenized Funds</h2>
          </div>
          {/* User Summary */}
          {/* User Summary */}

          <ul className="dashboard-notes">
            <li>
              <label>Total Investment : </label>{' '}
              <span>{formatter.format(stateTotalInvestment)}</span>
            </li>
            {/* <li>
              <label>Total Profit: </label>
              <span>Calculating...</span>
            </li> */}
            <li>
              <label>Total Current Market Value : </label>{' '}
              <span>{formatter.format(stateTotalMarketValue)}</span>
            </li>
          </ul>

          <Col className="table_head">
            <Table className="tablelist" responsive>
              <thead>
                <tr className="table_wrap">
                  {localStorage.getItem('user') === 'admin' && <th></th>}
                  <th>Token Name</th>
                  <th>Initial Price</th>
                  <th>Average Token Cost</th>
                  <th>Token Balance</th>
                  <th>Last Traded Price</th>
                  <th>Current Market Value</th>

                  {localStorage.getItem('user') === 'admin' && (
                    <>
                      <th>Token ID</th>
                      <th>Amount</th>
                    </>
                  )}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((v: any, i) => (
                  <>
                    <tr key={i} className="table_wrap">
                      {localStorage.getItem('user') === 'admin' && (
                        <td>
                          {' '}
                          <input
                            type="checkbox"
                            key={i}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              handleOnChange(
                                e.target.checked,
                                v.assetid,
                                amount[i]
                              );
                            }}
                          />
                        </td>
                      )}
                      <td>
                        {v?.z_asset.assetName.length > 15
                          ? `${v?.z_asset.assetName.slice(
                              0,
                              8
                            )}.....${v?.z_asset.assetName.slice(
                              v?.z_asset.assetName.length - 8,
                              v?.z_asset.assetName.length
                            )} `
                          : v?.z_asset.assetName}
                      </td>
                      {/* <td>
                          {mintedData !== undefined &&
                            mintedData?.token &&
                            mintedData.token.find(
                              (item) => item.name === v?.name
                            )?.faceValue}
                        </td> */}
                      <td>{v.z_asset.sellPrice}</td>
                      {/* <td>{purchaseLog(v?.name)}</td> */}
                      <td>
                        {stateAverageTokenCostArray &&
                          formatter.format(
                            stateAverageTokenCostArray[v?.z_asset.assetId]
                          )}
                      </td>
                      <td>{formatter.format(v?.amount)}</td>
                      <td>{formatter.format(v?.z_asset.last_traded_price)}</td>
                      <td>
                        {stateTotalMarketValueArray &&
                          formatter.format(
                            stateTotalMarketValueArray[v?.z_asset.assetId]
                          )}
                      </td>
                      {localStorage.getItem('user') === 'admin' && (
                        <>
                          <td>{v?.assetid}</td>
                          <td>
                            <input
                              type="number"
                              style={{ padding: ' 0.375rem 0.75rem' }}
                              className="form-control amount-entry"
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                //  const tempArr = amount;
                                amount[i] = Number(e.target.value);

                                setAmount(amount);

                                //handleDoc(amount);
                              }}
                            />
                          </td>
                        </>
                      )}
                      {/* <td className="mint_button" onClick={() => handleDeletevariety(obj)}> */}
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
                        <button
                          className="btn btn-selltoken table-btn"
                          onClick={() => {
                            setModal({
                              component: (
                                // <>
                                //   {localStorage.getItem('user') === 'admin' ? (
                                //     <Transfer
                                //       price={String(
                                //         mintedData !== undefined &&
                                //           mintedData?.token &&
                                //           mintedData.token.find(
                                //             (item) => item.name === v?.name
                                //           )?.faceValue
                                //       )}
                                //       assetId={Number(v.assetid)}
                                //       name={v.name}
                                //       balance={v.balance}
                                //     />
                                //   ) : (
                                 <SecondaryTransferModal
                                  balance={v?.amount}
                                  assetId={v?.z_asset.id}
                                  price={v?.price}
                                  totaltoken={v.token}
                                  remainingtoken={v.remaining_token}

                                /> 

                              
                                //   )}
                                // </>
                              ),
                            });
                          }}
                        >
                          Sell Token
                        </button>
                        <button
                          className="action_btn poll_btn"
                          onClick={() => {
                            setModal({
                              component: <ViewPollsModal id={v.z_asset.id} />,
                            });
                          }}
                        >
                          View Polls
                        </button>
                        <button
                          className="action_btn profit_btn"
                          onClick={() => {
                            setModal({
                              component: (
                                <ProfitDistribution assetId={v.z_asset.id} />
                              ),
                            });
                          }}
                        >
                          View Profit Distribution
                        </button>
                        {/*  <button
              onClick={() =>{handleOpenModal(v,i)}}>
              Transfer
            </button> */}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
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
          <div className="transfer-btn-botm">
            {/* <button
              className="create-btn"
              onClick={() =>
                setModal({
                  component: <TranferBatch />,
                })
              }
            >
              Batch Transfer
            </button> */}
          </div>
        </Row>
      ) : (
        <>
          <div className="header-area">
            <h2>My Tokens</h2>
          </div>
          <div>No Token Found</div>
        </>
      )}
    </>
  );
};
