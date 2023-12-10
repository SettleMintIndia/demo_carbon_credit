import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import contractAbi from '../../../../../libs/abis/Voting_SC.json';
const { NODE_RPC_URL, NODE_API_KEY, ADMIN_PRIVATE_KEY, VOTING_SC_ADDRESS } =
  process.env;
const provider = new ethers.providers.JsonRpcProvider(
  `${NODE_RPC_URL}/${NODE_API_KEY}`
);

const adminWallet = new ethers.Wallet(ADMIN_PRIVATE_KEY || '', provider);
const contract = new ethers.Contract(
  VOTING_SC_ADDRESS || '',
  contractAbi,
  provider
);
const contractWithAdminWallet = contract.connect(adminWallet);
console.log(contract);
export default async function handler(req, res) {
  console.log(req.body);

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        message: 'Method not allowed',
      });
    }

    // Smart contract call
    const gasLimit = await contractWithAdminWallet.estimateGas.updatePoll(
      '0',
      '32',
      '122332',
      'Gold314',
      'fhsjkhdsf',
      'fjdhgcqgka',
      'gfkhwgfg',
      'hfgkjcwghfg'
    );
    const gasLimitString = gasLimit.toString();
    const tx = await contractWithAdminWallet.updatePoll(
      '1100',
      '32',
      '122332',
      'Gold314',
      'fhsjkhdsf',
      'fjdhgcqgka',
      'gfkhwgfg',
      'jhfjkfahkj',
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
