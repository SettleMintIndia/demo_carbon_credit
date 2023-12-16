/* import {
  useGetProfitByAssetIdLazyQuery,
} from '@demo-carbon-credit/database'; */
import { Table } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import moment from 'moment';
import ProfitDistributionBreakup from './profitDistributionBreakup';
type Props = {
  assetId: string;
};
const profitDistribution = ({ assetId }: Props) => {
  const { setModal } = useModalContext();

  console.log('assetId value', assetId);

  // New Query

 /*  const [
    getProfitByAssetIdQuery,
    {
      data: profitDistributionData,
      loading: profitDistributionDataLoading,
      error: profitDistributionDataError,
    },
  ] = useGetProfitByAssetIdLazyQuery({
    fetchPolicy: 'network-only',
  }); */

  // use effect
  /* useEffect(() => {
    getProfitByAssetIdQuery({
      variables: {
        assetId: assetId,
      },
    });
  }, []);

  console.log('Profit distribution', profitDistributionData);

  if (profitDistributionDataLoading) return <p> Loading...</p>; */
  return (
    <div className="pop-info-base">
      <div>
        <h4>Profit Distribution</h4>
        <hr />
      </div>
      <div className="profit_table_container">
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>Data</th>
              {/* <th>Total Profit Distributed</th> */}
              <th>Benefitted Holders</th>
              <th>txHash</th>
              <th>View Breakup</th>
            </tr>
          </thead>
          <tbody>
           {/*  {profitDistributionData?.z_profit.map((v) => (
              <tr>
                <td>{moment(String(v.created_at)).format('DD-MMM-YY')}</td>
                <td>{v.totalHolders}</td>
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
                <td
                  onClick={() => {
                    setModal({
                      component: (
                        <ProfitDistributionBreakup
                          data={v.z_profit_distributions}
                        />
                      ),
                    });
                  }}
                  className="profit-distribution-view-action"
                >
                  View
                </td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default profitDistribution;
