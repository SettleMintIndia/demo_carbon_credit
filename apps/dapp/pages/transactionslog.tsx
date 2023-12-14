import { useGetAllTransactionsLazyQuery } from '@demo-carbon-credit/database';
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import Router from 'next/router';
import React from 'react';
import { Table ,Row} from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';

const Page: NextPageWithLayout = () => {
  // Fetch assets data

  const [getAllTransactionLazyQuery, { data:transaction, loading, error }] =
  useGetAllTransactionsLazyQuery  ({
      variables: {},
      fetchPolicy: 'network-only',
    });

    var totalTransactions=transaction ?.z_transaction_history;
    console.log(totalTransactions)
  // Initial call
  useEffect(() => {
    getAllTransactionLazyQuery();
  }, []);
  // Initial call
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
              <th>Token</th>
              <th>Amount</th>
              <th>txHash</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
          {totalTransactions?.map((v, i) => (
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
              <td>{v?.amount }</td>
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
    </>
  );
};
export default Page;
