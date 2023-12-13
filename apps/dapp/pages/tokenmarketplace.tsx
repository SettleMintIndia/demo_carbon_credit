
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import { Table } from 'react-bootstrap';
import moment from 'moment';

import React from 'react';
import {
    useGetSecondayMarketPlaceQuery
} from '@demo-carbon-credit/database';

const Page: NextPageWithLayout = () => {
    // Fetch assets data
    const { setModal } = useModalContext();

    const { data: tokenmarketplace, loading, error } = useGetSecondayMarketPlaceQuery();

    console.log("tokenmarketplace", tokenmarketplace)
    var totaltokenmarketplace = tokenmarketplace?.z_secondary_marketplace

    // Initial call
    return (
        <>

            <div className="mb-4">
                <h2>Token Market Place</h2>
            </div>
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
                        return <tr>
                            <td>{tx.tokens}</td>
                            <td>{tx?.z_user.username}</td>
                            <td>{tx.amount}</td>
                            <td>{moment(String(tx.created_at)).format('DD-MMM-YY')}</td>
                            <td>
                                {tx?.z_user.id==localStorage.getItem('user_id')?
                                <p></p>:
                                (
                                    <button>Purchase Now</button>
                                )
                            }

                            </td>

                        </tr>
                    })}

                </tbody>
            </Table>
            <hr />

        </>
    );
};
export default Page;
