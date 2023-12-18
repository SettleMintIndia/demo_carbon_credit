import {
  useGetTokenDetailsbyuserLazyQuery,
} from '@demo-carbon-credit/database';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

interface IUser {
  username: string;
  user_id:any;
}

export const User = function ({ username,user_id }: IUser) {
  const formatter = new Intl.NumberFormat('en-US');

  // new api

  const [
    getTokenHoldersByUsernameQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
    
  ] = useGetTokenDetailsbyuserLazyQuery({
    variables: {
      user_id: user_id,
    },
    fetchPolicy: 'network-only',

  });
  console.log("tokenHolderData",tokenHolderData,user_id)

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
            <th>Tokens</th>
            <th>Amount</th>
          </tr>
        </thead>

        {tokenHolderData &&
          tokenHolderData.z_token_holder.map((v, i) => (
            <tr key={i} className="table_wrap">
              <td>{v ?.token}</td>
              <td>{v ?.amount}</td>

            </tr>
          ))}
      </Table>
    </div>
  );
};
