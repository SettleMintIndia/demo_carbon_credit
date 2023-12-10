import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { hash } = req.query;

  const body = {
    jsonrpc: '2.0',
    id: 42,
    method: 'eth_getTransactionByHash',
    params: [`${hash}`],
  };
  console.log(body);

  const response = await fetch(
    'https://node-1-4d3b.gke-europe.settlemint.com/',
    {
      method: 'POST',
      headers: {
        'x-auth-token': 'bpaas-048AeE7e16DC4580af6a4F15f33a766146687F4C',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  ).then((response) => {
    return response.json();
  });
  await response;
  try {
    res.json(response);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
  console.log(response);
};
