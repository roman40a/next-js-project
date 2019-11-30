import React from 'react';
import { NextPage } from 'next';
import { Home } from '../src/components/home/home.component';
import { api } from '../src/api/api';

const HomePage: NextPage<{ userAgent: string; users: { id: string }[] }> = ({ userAgent, users }) => (
	<Home users={users} header={userAgent} />
);

HomePage.getInitialProps = async context => {
	const { req } = context;
	const response = await api.get('/api/users');
	const users: { id: string }[] = await response.json();
	const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

	return { userAgent, users };
};

export default HomePage;
