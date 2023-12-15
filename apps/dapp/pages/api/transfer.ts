import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from "ethers";
import abi from '../../abi/carbon.json'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  try {

    const {from,to,id,value,senderPvtKey} = body;

    /* const from = req.body.from;
    const to = req.body.to;
    const id = req.body.id;
    const value = req.body.value;
    const senderKey = req.body.senderPvtKey */

    if (!from || !to || !id || !value ||!senderPvtKey ) {
      res.status(400).send('Invalid Argument')
    }



    const provider = new ethers.JsonRpcProvider(`${process.env.NEXT_PUBLIC_JSON_RPC}/${process.env.NEXT_PUBLIC_API_KEY}`);
    const signer = new ethers.Wallet(`${senderPvtKey}`, provider)
    const contract = new ethers.Contract(`${process.env.NEXT_PUBLIC_CONTRACT}`, abi, signer)

    const transfer = await contract.safeTransferFrom(from, to, id, value, "0x00",{gasPrice:0})

    res.status(200).json({ txHash: transfer.hash })

  } catch (e) {
    console.log(e)
    res.status(500).json({ error: (e as Error).message });
  }
};
