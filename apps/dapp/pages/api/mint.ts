import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from "ethers";
import abi from '../../abi/carbon.json'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tokenCount = req.body.tokenCount;
    const recipient = req.body.recipient;

    if (!tokenCount || !recipient) {
      res.status(400).send('Invalid Argument')
    }

    const provider = new ethers.JsonRpcProvider(`${process.env.NEXT_PUBLIC_JSON_RPC}`);
    const signer = new ethers.Wallet(`${process.env.NEXT_PUBLIC_PVT_KEY}`, provider)
    const contract = new ethers.Contract(`${process.env.NEXT_PUBLIC_CONTRACT}`, abi, signer)

    const mint = await contract.mint(tokenCount, recipient)

    res.status(200).json({ txHash: mint.hash })

  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
};
