import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import abi from '../../abi/carbon.json';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  try {
    const {hash} = body;

  //  const hash = req.body.hash;

    if (!hash) {
      res.status(400).send('Invalid Argument');
    }
    // console.log(process.env.NEXT_PUBLIC_JSON_RPC);

    const provider = new ethers.JsonRpcProvider(
      `${process.env.NEXT_PUBLIC_JSON_RPC}/${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const signer = new ethers.Wallet(
      `${process.env.NEXT_PUBLIC_PVT_KEY}`,
      provider
    );
    const contract = new ethers.Contract(
      `${process.env.NEXT_PUBLIC_CONTRACT}`,
      abi,
      signer
    );

    const txReceipt = await provider.getTransactionReceipt(hash);

    const eventLogs = await txReceipt?.logs.map((log) => {
      return contract.interface.parseLog(log);
    });

    const event = eventLogs?.map((v) => {
      return v?.args[3].toString();
    });
    // const mint = await contract.mintBatch(tokenCount, recipient)
    const result = event?.filter((v)=>{return v!=null});

    res.status(200).json({ tokenIDs: result });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
};
