import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const response = await fetch(
    'https://integration-tool-a9e0.gke-europe.settlemint.com/batchtransfer',
    {
      method: 'POST',
      headers: {
        'x-auth-token': 'bpaas-048AeE7e16DC4580af6a4F15f33a766146687F4C',
        'Content-Type': 'application/json',
      },
      body: body,
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
};
