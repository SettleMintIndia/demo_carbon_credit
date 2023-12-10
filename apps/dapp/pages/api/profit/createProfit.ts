import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import contractAbi from '../../../../../libs/abis/Profit_SC.json';
const { NODE_RPC_URL, NODE_API_KEY, ADMIN_PRIVATE_KEY, PROFIT_SC_ADDRESS } =
  process.env;
const provider = new ethers.providers.JsonRpcProvider(
  `${NODE_RPC_URL}/${NODE_API_KEY}`
);

const adminWallet = new ethers.Wallet(ADMIN_PRIVATE_KEY || '', provider);
const contract = new ethers.Contract(
  PROFIT_SC_ADDRESS || '',
  contractAbi,
  provider
);
const contractWithAdminWallet = contract.connect(adminWallet);
console.log(contract);
export default async function handler(req, res) {
  const body = req.body;
  console.log('Profit body: ', body);

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        message: 'Method not allowed',
      });
    }

    // Smart contract call
    const gasLimit = await contractWithAdminWallet.estimateGas.createProfit(
      body.total_profit,
      body.total_holders,
      body.token_id,
      body.token_name,
      body.profit_distribution
    );
    const gasLimitString = gasLimit.toString();
    const tx = await contractWithAdminWallet.createProfit(
      body.total_profit,
      body.total_holders,
      body.token_id,
      body.token_name,
      body.profit_distribution,
      {
        gasPrice: 0,
        gasLimit: gasLimitString,
      }
    );

    const txReceipt = await tx.wait(1);

    return res.status(200).json({
      txHash: txReceipt.transactionHash,
    });
  } catch (error) {
    console.log('console error', error);
    return res.status(500).json({
      error,
    });
  }
}
