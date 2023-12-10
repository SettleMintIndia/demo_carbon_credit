import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import contractAbi from '../../../../../libs/abis/KYC_SC.json';
const { NODE_RPC_URL, NODE_API_KEY, ADMIN_PRIVATE_KEY, KYC_SC_ADDRESS } =
  process.env;
const provider = new ethers.providers.JsonRpcProvider(
  `${NODE_RPC_URL}/${NODE_API_KEY}`
);

const adminWallet = new ethers.Wallet(ADMIN_PRIVATE_KEY || '', provider);
const contract = new ethers.Contract(
  KYC_SC_ADDRESS || '',
  contractAbi,
  provider
);

const contractWithAdminWallet = contract.connect(adminWallet);
console.log(contract);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log('KYC body: ', body);

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        message: 'Method not allowed',
      });
    }

    // Smart contract call
    const gasLimit = await contractWithAdminWallet.estimateGas.addCustomer(
      body.name,
      body.email,
    );
    const gasLimitString = gasLimit.toString();
    const tx = await contractWithAdminWallet.addCustomer(
      body.name,
      body.email,
      {
        gasPrice: 0,
        gasLimit: gasLimitString,
      }
    );
    console.log(tx)

    const txReceipt = await tx.wait(1);
    console.log(txReceipt)
    
    return res.status(200).json({
      //txHash: txReceipt.transactionHash,
      txReceipt: txReceipt,
    });
  } catch (error) {
    console.log('console error', error);
    return res.status(500).json({
      error,
    });
  }
}
