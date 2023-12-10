import {
  useCreateProfitDistributionMutation,
  useCreateProfitMutation,
  useGetTokenBalanceQuery,
  useGetTokenHolderDetailsLazyQuery,
} from '@demo-carbon-credit/database';
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useModalContext } from '@demo-carbon-credit/providers';
import axios from 'axios';

import { ethers } from 'ethers';
const contractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'total_profit',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'total_holders',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'token_id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'token_name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'profit_distribution',
        type: 'string',
      },
    ],
    name: 'CreateProfit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_total_profit',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_total_holders',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_id',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_token_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_profit_distribution',
        type: 'string',
      },
    ],
    name: 'createProfit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
const provider = new ethers.providers.JsonRpcProvider(
  `https://node-1-4d3b.gke-europe.settlemint.com/bpaas-593499Ee5d10f1EEad81348775fa4c182D310008`
);

const adminWallet = new ethers.Wallet(
  '0x908e18cc8f9024d5a41e707e88d9a2fc51a1fe612a80130cbbfc10a7b49a299e',
  provider
);
const contract = new ethers.Contract(
  '0x14FB8447084b5becC69E8C5C673834E41685e8dd',
  contractAbi,
  provider
);

const contractWithAdminWallet = contract.connect(adminWallet);

import toast from 'react-hot-toast';
type Props = {
  asset: any;
};
const profit = ({ asset }: Props) => {
  const { setModal } = useModalContext();
  const [profit, setProfit] = useState('');
  const [blockChainTransaction, setBlockChainTransaction] = useState(false);
  // const [totalValue, setTotalValue] = useState(0);
  // const [showData, setShowData] = useState(null);
  // Get all holders information
  // const { data, loading } = useGetTokenBalanceQuery({
  //   fetchPolicy: 'network-only',
  // });

  // const [
  //   addProfitMutation,
  //   { data: addProfitData, loading: addProfitLoading, error: addProfitError },
  // ] = useAddProfitMutation({});
  // const [
  //   addProfitDistributionMutation,
  //   {
  //     data: addProfitDistributionData,
  //     loading: addProfitDistributionLoading,
  //     error: addProfitDistributionError,
  //   },
  // ] = useAddProfitDistributionMutation({});
  // const { data: userDetail, loading: assetLoading } = useGetUsersQuery({
  //   fetchPolicy: 'network-only',
  // });

  // const tokenData = data?.accounts.map((v) => {
  //   return {
  //     balance: v?.ERC1155balances.find(
  //       (v) => v.token.identifier === asset.assetId
  //     )?.valueExact,
  //     // fraction:
  //     //   totalValue /
  //     //   v?.ERC1155balances.find((v) => v.token.identifier === assetId)
  //     //     ?.valueExact,
  //     // account: v?.id,
  //     Name:
  //       userDetail?.users.find((n) => n.address.toLowerCase() === v.id)
  //         ?.username ?? 'NA',
  //   };
  // });

  // const showData = tokenData?.filter((v) => v.balance !== undefined);

  const [totalHolders, setTotalHolders] = useState('0');
  const formatter = new Intl.NumberFormat('en-US');
  //***** New api for token holder ******

  // Get all token_holder by token uuid

  const [
    getTokenHolderDetailsQuery,
    {
      data: tokenHolderData,
      loading: tokenHolderDataLoading,
      error: tokenHolderDataError,
    },
  ] = useGetTokenHolderDetailsLazyQuery({
    fetchPolicy: 'network-only',
  });
  const totalValue = tokenHolderData?.z_token_holder?.reduce(
    (sum, obj) => sum + (Number(obj.amount) || 0),
    0
  );
  console.log('Total Value: ', totalValue);

  //Create profit
  const [
    createProfitMutation,
    {
      data: createProfitData,
      loading: createProfitDataLoading,
      error: createProfitDataError,
    },
  ] = useCreateProfitMutation({});
  // Create profit distribution
  const [
    createProfitDistributionMutation,
    {
      data: createProfitDistributionData,
      loading: createProfitDistributionLoading,
      error: createProfitDistributionError,
    },
  ] = useCreateProfitDistributionMutation({});

  // UseEffect initial call
  useEffect(() => {
    getTokenHolderDetailsQuery({
      variables: {
        assetId: asset.id,
      },
    });
  }, []);

  // Set total tokenHolders

  useEffect(() => {
    if (tokenHolderData?.z_token_holder) {
      let total = String(tokenHolderData?.z_token_holder.length);
      setTotalHolders(total);
    }
  }, [tokenHolderData?.z_token_holder]);

  console.log('token holders', tokenHolderData);
  console.log('asset details', asset);

  const submitProfitDistribution = async () => {
    let profit_distributions: any = [];

    tokenHolderData?.z_token_holder?.map((v) => {
      profit_distributions.push({
        name: v.z_asset.assetName,
        tokenHeld: v.amount,
        share_in_profit: String(
          Number(profit) / (totalValue! / Number(v.amount))
        ),
        userId: v.userId,
      });
    });

    let profitObj = {
      assetId: asset.id,
      totalHolders: totalHolders,
      totalProfit: '',
    };

    // First save the profit then all profit distribution associated with it.

    try {
      // Store in blockchain
      setBlockChainTransaction(true);
      // const hash = await fetch('/api/profit/createProfit', {
      //   method: 'POST',

      //   body: JSON.stringify({
      // total_profit: String(totalValue),
      // total_holders: totalHolders,
      // token_id: assetId,
      // token_name: assetName,
      // profit_distribution: JSON.stringify(profit_distributions),
      //   }),
      // });
      // const txResponse = await hash.json();
      // const hash = await axios.post('/api/profit/createProfit', {
      //   total_profit: String(totalValue),
      //   total_holders: totalHolders,
      //   token_id: assetId,
      //   token_name: assetName,
      //   profit_distribution: JSON.stringify(profit_distributions),
      // });

      // const response = hash.data;

      // console.log('Response: ', response);

      // Direct call

      const gasLimit = await contractWithAdminWallet.estimateGas.createProfit(
        String(totalValue),
        totalHolders,
        asset.assetId,
        asset.assetName,
        JSON.stringify(profit_distributions)
      );
      const gasLimitString = gasLimit.toString();
      const tx = await contractWithAdminWallet.createProfit(
        String(totalValue),
        totalHolders,
        asset.assetId,
        asset.assetName,
        JSON.stringify(profit_distributions),
        {
          gasPrice: 0,
          gasLimit: gasLimitString,
        }
      );
      const txReceipt = await tx.wait(1);

      const profitId = await createProfitMutation({
        variables: { ...profitObj, txHash: txReceipt.transactionHash },
      });
      console.log('profit id', profitId.data?.insert_z_profit?.returning[0].id);
      profit_distributions.map(async (value: any) => {
        const profitDistribution = await createProfitDistributionMutation({
          variables: {
            ...value,
            profitId: profitId.data?.insert_z_profit?.returning[0].id,
          },
        });
      });

      toast.success('Distribution  successful');
      setBlockChainTransaction(false);
      setModal(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  if (tokenHolderDataLoading) return <p>Loading...</p>;

  return (
    <div className="pop-info-base">
      <div>
        <h4>Add Profit Distribution</h4>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="profit-box">
            <label>Profit</label>
            <div className="input-box">
              <input
                onChange={(e) => setProfit(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add dynamic table */}

      <div className="profit_table_container">
        <Table className="tablelist" responsive>
          <thead>
            <tr className="table_wrap">
              <th>User Name</th>
              <th>Token Held</th>
              <th>Share in Profit</th>
            </tr>
          </thead>
          {tokenHolderData &&
            tokenHolderData?.z_token_holder &&
            tokenHolderData?.z_token_holder?.map((v, i) => (
              <tr key={i} className="table_wrap">
                <td>{v.z_user.username}</td>
                <td>{formatter.format(Number(v?.amount))}</td>
                {/* Dynamically calculated  value*/}
                <td>
                  {formatter.format(
                    Math.round(
                      Number(profit) / (totalValue! / Number(v.amount))
                    )
                  )}
                </td>
              </tr>
            ))}
        </Table>
      </div>

      <div className="text-right">
        <button
          onClick={submitProfitDistribution}
          disabled={
            createProfitDataLoading ||
            createProfitDistributionLoading ||
            blockChainTransaction
              ? true
              : false
          }
        >
          {createProfitDataLoading ||
          createProfitDistributionLoading ||
          blockChainTransaction
            ? `Distributing`
            : `Distribute`}
        </button>
      </div>
    </div>
  );
};

export default profit;
