import { NextApiRequest, NextApiResponse } from 'next';
const { INTEGRATION_STUDIO_HOST, X_AUTH_TOKEN } = process.env;
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const response = await fetch(`${INTEGRATION_STUDIO_HOST}/burn`, {
    method: 'POST',
    headers: {
      'x-auth-token': `${X_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body,
  }).then((response) => {
    return response.json();
  });
  await response;
  try {
    res.json(response);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
