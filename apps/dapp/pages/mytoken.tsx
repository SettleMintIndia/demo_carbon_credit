
import { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import React from 'react';
import { Table } from 'react-bootstrap';
import { SecondaryTransferModal } from '@demo-carbon-credit/components';
import {
    useGettokensLazyQuery
} from '@demo-carbon-credit/database';
const Page: NextPageWithLayout = () => {
    
    const { setModal } = useModalContext();
    const [user_id, setUserId] = useState('');
    
    const [getTokensLazyQuery, { data: mytokensdata, loading, error }] = useGettokensLazyQuery({
        variables: {
            user_id: user_id // value for 'user_id'

        }
    });

    var totaltokens = mytokensdata?.z_minttokens
    console.log("totaltokens", totaltokens)
    useEffect(() => {
        let userid = localStorage.getItem('user_id');
        console.log('user_id', userid);
        setUserId(userid)

        if (localStorage.getItem('user_id')) {
            getTokensLazyQuery();
        }
    }, [user_id]);
    return (
        <>
        <div className="mb-4">
          <h2>My Tokens</h2>
        </div>
        <hr />
        <Table className="tablelist" responsive>
        <thead>
          <tr className="table_wrap">
            <th>Tokens</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {totaltokens?.map((tx: any) => {
            
            return <tr>
              <td>{tx.token}</td>
              <td>
              <button
              className="btn btn-selltoken table-btn"
              onClick={() => {
                setModal({
                  component: (
                    <SecondaryTransferModal
                      balance={tx.totalQuantity}
                      assetId={tx.id}
                      price={String(tx.initialPrice)}
                      token={tx.token}
                    />
                  ),
                });
              }}
            >
              Sell Token
            </button>
              </td>
              
            </tr>
          })}
          
        </tbody>
      </Table></>
          );
};
export default Page;
