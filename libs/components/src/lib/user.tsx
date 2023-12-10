import {
  useGetTokenHoldersByUsernameLazyQuery,
} from '@demo-carbon-credit/database';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

interface IUser {
  username: string;
}

export const User = function ({ username }: IUser) {
  const formatter = new Intl.NumberFormat('en-US');

  // new api

  const [
    getTokenHoldersByUsernameQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useGetTokenHoldersByUsernameLazyQuery({
    variables: {
      username: username,
    },
  });

  // Initial call
  useEffect(() => {
    getTokenHoldersByUsernameQuery();
  }, []);

  if (tokenHolderDataLoading) return <p>Loading....</p>;
  return (
    <div className="row">
      <Table className="tablelist" responsive>
        <thead>
          <tr className="table_wrap">
            <th>Fund Name</th>
            <th>Token Amount</th>
            <th>Management Fee</th>
            <th>Currency</th>
          </tr>
        </thead>

        {tokenHolderData &&
          tokenHolderData.z_token_holder.map((v, i) => (
            <tr key={i} className="table_wrap">
              <td>{v.z_asset.assetName}</td>
              <td>{formatter.format(Number(v?.amount))}</td>
              <td>{v.z_asset.managementFee}</td>
              <td>{v.z_asset.currency}</td>
            </tr>
          ))}
      </Table>
    </div>
  );
};
