// Fake users data
import { NextApiRequest, NextApiResponse } from 'next';

const users = [
	{
		id: 1,
	},
	{ id: 2 },
	{ id: 3 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
	// Get data from your database
	res.status(200).json(users);
};
