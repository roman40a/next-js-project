import fetch from 'isomorphic-unfetch';

export type TApi = {
	get(url: string): Promise<Response>;
};

class Api implements TApi {
	constructor(root: string) {
		this.root = root;
	}

	private readonly root: string;

	public get = (url: string): Promise<Response> => {
		return fetch(`${this.root}${url}`, {
			method: 'GET',
		});
	};
}

export const getApi = (root: string): Api => new Api(root);
