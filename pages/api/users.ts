import { NextApiRequest, NextApiResponse } from 'next';

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default (req: NextApiRequest, res: NextApiResponse) => {
	const { method, query } = req;
	switch (method) {
		case 'GET': {
			res.status(200).json(users);
			return;
		}
		default: {
			res.status(404).end([]);
			return;
		}
	}
};
