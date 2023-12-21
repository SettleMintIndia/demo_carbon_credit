import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import React from 'react';
import {
  useGetSecondayMarketPlaceQuery, useCreateTransctionHistoryMutation, useCreateTokenMutation,
  useUpdateSecondayMarketPlaceMutation,
  useCheckRecordExistLazyQuery,
  useCreateTokenHolderMutation,
  useUpdateTokenHolderMutation,

} from '@demo-carbon-credit/database';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Page: NextPageWithLayout = () => {
  // Fetch assets data
  const { setModal } = useModalContext();
  const [offset, setOffSet] = useState(0);
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [orgtableData, setOrgTableData] = useState<Array<any>>([]);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setSearchData] = useState<Array<any>>([]);
  const [searchKey, setSearchKey] = useState('n');


  const {
    data: tokenmarketplace,
    loading,
    error,
  } = useGetSecondayMarketPlaceQuery({
    fetchPolicy: 'network-only',
  });

  console.log('tokenmarketplace', tokenmarketplace);
  var totaltokenmarketplace = tokenmarketplace?.z_secondary_marketplace;

  const [createTransctionHistoryMutation] = useCreateTransctionHistoryMutation();
  const [createTokenMutation] = useCreateTokenMutation();
  const [updateSecondayMarketPlaceMutation] = useUpdateSecondayMarketPlaceMutation()
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



  useEffect(() => {
    const Data: any[] = [];
    tokenmarketplace?.z_secondary_marketplace.map((v) => {
      Data.push(v);
    });
    console.log("Data",Data)
    const slice = Data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(Data.length / perPage));
    setOrgTableData(Data);
    setSearchData(Data);
    setTableData(slice);
  }, [tokenmarketplace?.z_secondary_marketplace]);

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

  const handlePurchase = async (tx) => {
    console.log(tx);



    toast(
      <div className="loading_image">
        <img src="/PaymentProgress.gif" />
      </div>,
      {
        duration: 8000, // Delay of 2000 milliseconds (2 seconds)
      }
    );

    const response = await fetch('/api/getTokenID', {
      method: 'post',
      body: JSON.stringify({
        hash: tx?.z_minttoken.tx_hash,

      }),
    })
    console.log("response", response);
    const data = await response.json();
    console.log("Data", data);
    let x = {
      from: localStorage.getItem('user_address'),
      to: tx?.z_user.address,
      id: data.tokenIDs[0],
      value: tx.tokens,
      senderKey: localStorage.getItem('pvtkey')

    }
    console.log(x);

    const transfer_response = await fetch('/api/transfer', {
      method: 'post',
      body: JSON.stringify({
        to: localStorage.getItem('user_address'),
        from: tx?.z_user.address,
        id: data.tokenIDs[0],
        value: tx.tokens,
        senderPvtKey: tx?.z_user.pvtKey
      }),
    })
    console.log("transfer_response", transfer_response);
    const transfer_data = await transfer_response.json();
    console.log("Data", transfer_data);

    if (transfer_data?.txHash != undefined) {

      setTimeout(async () => {


        createTransctionHistoryMutation({
          variables: {
            amount: tx.amount,// value for 'amount'
            mint_id: tx.minttoken_id,// value for 'mint_id'
            sender: localStorage.getItem('user_id'),// value for 'sender'
            receiver: tx.owner_id, // value for 'receiver'
            token: tx.tokens,// value for 'token'
            tx_hash: transfer_data?.txHash// value for 'tx_hash'
          }
        })
        const token_response = await fetch('/api/mint', {
          method: 'post',
          body: JSON.stringify({
            tokenCount: tx.tokens,
            recipient: localStorage.getItem('user_address'),
          }),
        })
        console.log("token_response", token_response);
        const token_data = await token_response.json();
        console.log("Data", token_data);

        await createTokenMutation({
          variables: {
            token: tx.tokens, // value for 'token'
            tx_hash: token_data?.txHash, // value for 'tx_hash'
            user_id: localStorage.getItem('user_id'),
            remaining_token:tx.tokens // value for 'user_id'
          },
        })

          // For User
          await checkRecordExistLazyQuery({
            variables: {
              mint_id: tx.minttoken_id,
              user_id: tx.owner_id
            },
            fetchPolicy: 'network-only',
          }).then((res) => {
            if (res?.data?.z_token_holder[0]?.id === undefined) {
              console.log('user create', res?.data?.z_token_holder);
              // Create user
              createTokenHolderMutation({
                variables: {
                  amount: tx?.amount,
                  mint_id: tx?.minttoken_id,
                  user_id: tx.owner_id,
                  token:tx?.tokens
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
                      Number(tx?.amount)
                  ),
                },
              });
            }
          });

        updateSecondayMarketPlaceMutation({
          variables: {
            tokens: '0',
            id: tx.id // value for 'tx_hash'
          },
        }).then((res) => {
          toast.remove();
          toast(
            <div className="loading_image">
              <img src="/PurchasedTokens.gif" />
            </div>,
            {
              duration: 10000, // Delay of 2000 milliseconds (2 seconds)
            }
          );

          return res;
        }).catch((error) => {
          toast.error(`Error, please try again later.${error}`);
          return error;
        });

        Router.push('/mytoken');




      }, 4100);
    }
    else {
      toast.error(`Error, please try again later}`);

    }


  }
  if (loading) return <div className="spinner"></div>

  return (
    <>
      <Table className="tablelist" responsive>
        <thead>
          <tr className="table_wrap">
            <th>Token for sale</th>
            <th>Seller</th>
            <th>Amount</th>
            <th>Listing Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((tx: any) => {
            return (
              <tr>
                <td>{tx.tokens}</td>
                <td>{tx?.z_user.username}</td>
                <td>{tx.amount}</td>
                <td>{moment(String(tx.created_at)).format('DD-MMM-YY')}</td>
                <td>
                  {tx?.z_user.id == localStorage.getItem('user_id') ? (
                    <p>Your Listing</p>
                  ) : (
                    <button onClick={() => handlePurchase(tx)}>Purchase Now</button>
                  )}
                </td>
              </tr>
            );
          })}
          {tableData?.length == 0 && <tr>
            <td colSpan={12}><p style={{ textAlign: 'center', fontWeight: 'bold' }}>No Data Found</p></td></tr>}
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
