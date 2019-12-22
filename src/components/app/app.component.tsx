import * as React from 'react';
import { getApi, TApi } from '../../api/api';

import css from './styles/app.styl';

type User = {
	id: string;
};

export type Props = {
	root: string;
};

type State = {
	users: User[];
};

export class App extends React.PureComponent<Props, State> {
	readonly state: State = {
		users: [],
	};

	private api: TApi | undefined;

	async componentDidMount() {
		const { root } = this.props;

		this.api = getApi(root);
		const res = await this.api.get('/api/users');
		const users = await res.json();
		this.setState({ users });
	}

	render() {
		const { users } = this.state;
		return (
			<div className={css.container}>
				<h1>Hello world!</h1>
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.id}</li>
					))}
				</ul>
			</div>
		);
	}
}
