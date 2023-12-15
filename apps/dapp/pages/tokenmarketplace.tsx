import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import React from 'react';
import {
    useGetSecondayMarketPlaceQuery, useCreateTransctionHistoryMutation, useCreateTokenMutation,
    useUpdateSecondayMarketPlaceMutation
} from '@demo-carbon-credit/database';
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
                        user_id: localStorage.getItem('user_id') // value for 'user_id'
                    },
                })

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
