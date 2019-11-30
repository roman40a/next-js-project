import * as React from 'react';

import css from './styles/home.styl';
import { api } from '../../api/api';

type User = {
	id: string;
};

export type Props = {
	users: User[];
	header: string;
};

export class Home extends React.PureComponent<Props> {
	async componentDidMount() {
		const res = await api.get('/api/users');
		const users = await res.json();
		console.log(users);
	}

	render() {
		const { users, header } = this.props;
		console.log(css);
		return (
			<div className={css.container}>
				<h1>Hello world! - user agent: {header}</h1>
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.id}</li>
					))}
				</ul>
			</div>
		);
	}
}
