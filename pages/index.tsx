import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { Home } from '../components/home/home.component';

const HomePage: NextPage<{ userAgent: string; users: { id: string }[] }> = ({ userAgent, users }) => (
	<Home users={users} header={userAgent} />
);

HomePage.getInitialProps = async context => {
	const { req } = context;
	const response = await fetch('https://next-js-project.roman40a.now.sh/api/users');
	const users: { id: string }[] = await response.json();
	const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

	return { userAgent, users };
};

export default HomePage;
