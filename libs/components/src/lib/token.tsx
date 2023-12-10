import {
  useGetTokenHolderDetailsLazyQuery,
} from '@demo-carbon-credit/database';
import { Table } from 'react-bootstrap';
import PieChart from './pieChart';
import { useEffect } from 'react';
interface IToken {
  assetUUID: string;
}

export const Token = function ({ assetUUID }: IToken) {
  // const { data, loading } = useGetTokenBalanceQuery({
  //   fetchPolicy: 'network-only',
  // });
  // const { data: userDetail, loading: assetLoading } = useGetUsersQuery({
  //   fetchPolicy: 'network-only',
  // });

  const [
    getTokenHolderDetailsLazyQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useGetTokenHolderDetailsLazyQuery({
    fetchPolicy: 'network-only',
  });

  // Initial call

  useEffect(() => {
    getTokenHolderDetailsLazyQuery({
      variables: {
        assetId: assetUUID,
      },
    });
  }, []);

  // const tokenData = data?.accounts.map((v) => {
  //   return {
  //     balance: v?.ERC1155balances.find((v) => v.token.identifier === assetUUID)
  //       ?.valueExact,
  //     account: v?.id,
  //     Name:
  //       userDetail?.users.find((n) => n.address.toLowerCase() === v.id)
  //         ?.username ?? 'NA',
  //   };
  // });
  // const showData = tokenData?.filter((v) => v.balance !== undefined);
  console.log('token holder data', tokenHolderData, assetUUID);
  if (tokenHolderDataLoading) return <p>Loading...</p>;
  return (
    <div className="row">
      <div>
        <h2>Token Holders</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="logo_image_container">
            {/* <img
              src="/holders.png"
              alt="logo payment"
              className="dummy_payment_image"
            /> */}
            {/* <div className="pie-chart-container"> */}
            {tokenHolderData && tokenHolderData.z_token_holder && (
              <PieChart data={tokenHolderData?.z_token_holder!} />
            )}
            {/* </div> */}
          </div>
        </div>
        <div className="col-md-8">
          <Table className="tablelist" responsive>
            <thead>
              <tr className="table_wrap">
                <th>User Name</th>
                <th>Wallet Address</th>
                <th>Tokens</th>
              </tr>
            </thead>
            {tokenHolderData?.z_token_holder?.map((v, i) => (
              <tr key={i} className="table_wrap">
                <td>{v.z_user.username}</td>
                <td>
                  <div className="account-des">{v.id}</div>
                </td>
                <td>{v?.amount}</td>
              </tr>
            ))}
          </Table>
          {/* {showData && (
            <div className="pie-chart-container">
              <PieChart data={showData!} />
            </div>
           )} */}
        </div>
      </div>
    </div>
  );
};
