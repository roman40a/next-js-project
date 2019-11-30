import fetch from 'isomorphic-unfetch';

class Api {
	constructor(root: string) {
		this.root = root;
	}

	root: string;

	get = (url: string): Promise<Response> => {
		return fetch(`${this.root}${url}`, {
			method: 'GET',
		});
	};
}

export const api = new Api('https://next-js-project.roman40a.now.sh');
