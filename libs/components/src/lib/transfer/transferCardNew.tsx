import {
  useGetTransactionHistoryByReceiverQuery,
} from '@demo-carbon-credit/database';
import { Table } from 'react-bootstrap';
import ProfitDistribution from '../profitDistribution';
import { useModalContext } from '@demo-carbon-credit/providers';
import { SecondaryTransferModal } from '../secondaryTransferModal';
import ViewPollsModal from 'libs/components/src/lib/poll/viewPollsModal';

export const TransferCardNew = () => {
  const { setModal } = useModalContext();
  const {data, loading, error} = useGetTransactionHistoryByReceiverQuery({
    fetchPolicy: 'network-only',
    variables: {
      username: localStorage.getItem('user')
    }
  });
  const formatter = new Intl.NumberFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    roundingMode: "ceil",
    maximumFractionDigits: 0,
    roundingIncrement: 1, 
  });
  

  if (loading) <p>Loading...</p>;
  console.log("data",data?.z_transaction_history);
  const mergedTransactions = {};

  data?.z_transaction_history.forEach(transaction => {
    const assetId = transaction.assetId;
    if (mergedTransactions[assetId]) {
        // Update the total price and quantity
        mergedTransactions[assetId].assetId = transaction.assetId;
        mergedTransactions[assetId].lastTradedPrice = transaction.price;
        mergedTransactions[assetId].initialPrice = Number(transaction.z_asset.sellPrice);
        mergedTransactions[assetId].totalPrice += Number(transaction.price) * Number(transaction.amount);
        mergedTransactions[assetId].totalQuantity += Number(transaction.amount);
    } else {
        // Create a new entry
        mergedTransactions[assetId] = {
          assetId: transaction.assetId,
          lastTradedPrice: transaction.price,
          initialPrice: Number(transaction.z_asset.sellPrice),
          totalPrice: Number(transaction.price) * Number(transaction.amount),
          totalQuantity: Number(transaction.amount),
          assetName: transaction.z_asset.assetName
        };
    }
});

// Calculate the average price for each asset
for (let assetId in mergedTransactions) {
    mergedTransactions[assetId].averagePrice = mergedTransactions[assetId].totalPrice / mergedTransactions[assetId].totalQuantity;
}

console.log(Object.values(mergedTransactions));

  console.log(mergedTransactions);

  return Object.values(mergedTransactions).length > 0 ? (
    <>
    <div className="mb-4">
      <h2>My Tokens</h2>
    </div>
    <hr />
    <Table className="tablelist" responsive>
    <thead>
      <tr className="table_wrap">
        {localStorage.getItem('user') === 'admin' && <th></th>}
        <th>Token Name</th>
        <th>Initial Price</th>
        <th>Last Traded Price</th>
        <th>Quantity</th>
        <th>Average Cost</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(mergedTransactions).map((tx: any) => {
        
        return <tr>
          <td>{tx.assetName}</td>
          <td>{formatter.format(tx.initialPrice)}</td>
          <td>{formatter.format(tx.lastTradedPrice)}</td>
          <td>{formatter.format(tx.totalQuantity)}</td>
          <td>{formatter.format(tx.averagePrice)}</td>
          <td>
            <button
              className="btn btn-selltoken table-btn"
              onClick={() => {
                setModal({
                  component: (
                    <SecondaryTransferModal
                      balance={tx.totalQuantity}
                      assetId={tx.assetId}
                      price={String(tx.initialPrice)}
                    />
                  ),
                });
              }}
            >
              Sell Token
            </button>
            <button
              className="action_btn poll_btn"
              onClick={() => {
                setModal({
                  component: <ViewPollsModal id={tx.assetId} />,
                });
              }}
            >
              View Polls
            </button>
            <button
              className="action_btn profit_btn"
              onClick={() => {
                setModal({
                  component: (
                    <ProfitDistribution assetId={tx.assetId} />
                  ),
                });
              }}
            >
              View Profit Distribution
            </button>
          </td>
        </tr>
      })}
      
    </tbody>
  </Table></>) : (
        <>
          <div className="header-area">
            <h2>My Tokens</h2>
          </div>
          <div>No Token Found</div>
        </>
      )
}