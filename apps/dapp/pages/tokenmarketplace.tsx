import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import React from 'react';
import { useGetSecondayMarketPlaceQuery, useCreateTransctionHistoryMutation,useCreateTokenMutation,
    useUpdateSecondayMarketPlaceMutation } from '@demo-carbon-credit/database';
import toast from 'react-hot-toast';

const Page: NextPageWithLayout = () => {
    // Fetch assets data
    const { setModal } = useModalContext();

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

    // Initial call

    const handlePurchase = (tx) => {
        console.log(tx);
        toast(
            <div className="loading_image">
                <img src="/PaymentProgress.gif" />
            </div>,
            {
                duration: 5000, // Delay of 2000 milliseconds (2 seconds)
            }
        );
        setTimeout(async () => {
            createTransctionHistoryMutation({
                variables: {
                    amount: tx.amount,// value for 'amount'
                    mint_id: tx.minttoken_id,// value for 'mint_id'
                    sender: localStorage.getItem('user_id'),// value for 'sender'
                    receiver: tx.owner_id, // value for 'receiver'
                    token: tx.tokens,// value for 'token'
                    tx_hash: "#123"// value for 'tx_hash'
                }
            })
            await createTokenMutation({
                variables: {
                       token:tx.tokens, // value for 'token'
                       tx_hash:"#0000", // value for 'tx_hash'
                       user_id:localStorage.getItem('user_id') // value for 'user_id'
                     },
              }) 

              updateSecondayMarketPlaceMutation({
                variables: {
                  tokens:'0',
                  id:tx.id // value for 'tx_hash'
                },
              }).then((res)=>{
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
              }). catch((error) => {
                toast.error(`Error, please try again later.${error}`);
                return error;
              });
                 

             
           

        }, 4100);

    }
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
                    {totaltokenmarketplace?.map((tx: any) => {
                        return (
                            <tr>
                                <td>{tx.tokens}</td>
                                <td>{tx?.z_user.username}</td>
                                <td>{tx.amount}</td>
                                <td>{moment(String(tx.created_at)).format('DD-MMM-YY')}</td>
                                <td>
                                    {tx?.z_user.id == localStorage.getItem('user_id') ? (
                                        <p></p>
                                    ) : (
                                        <button onClick={() => handlePurchase(tx)}>Purchase Now</button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                    {totaltokenmarketplace?.length == 0 && <tr>
                        <td colSpan={12}><p style={{ textAlign: 'center', fontWeight: 'bold' }}>No Data Found</p></td></tr>}
                </tbody>
            </Table>
            <hr />
        </>
    );
};
export default Page;
