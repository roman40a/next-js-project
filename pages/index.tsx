import React from 'react';
import { NextPage } from 'next';
import { App, Props } from '../src/components/app/app.component';

const HomePage: NextPage<Props> = props => <App {...props} />;

HomePage.getInitialProps = async context => {
	const root = process.env.root || 'http://localhost:3000';

	return { root };
};

export default HomePage;
