import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../constants/app.constants';

export default class AjaxService {
	static instance: AjaxService;
	static authHandler: any;

	constructor(handler?: any) {
		if (AjaxService.instance) {
			return AjaxService.instance;
		}
		AjaxService.instance = this;
		AjaxService.authHandler = handler;
	}

	defaultOnError = ({ response }: AxiosError) => {
		if (!response) {
			return;
		}
		if (response.status === 400) {
			console.error('got status 400 - bad request');
		}
		if (response.status === 304) {
			console.error('got status 304 - not authorized');
		}
		if (response.status === 403) {
			console.error('got status 403 - session expired');
		}
		if (response.status === 401) {
			console.error('got status 401 - unauthorized');
			if (AjaxService.authHandler) {
				AjaxService.authHandler();
			}
		}
		if (response.status === 404) {
			console.error('got status 404 - not found');
		}

		console.error('Error: ', response);
		return Promise.reject(response);
	};

	defaultOnSuccess = (response: Response) => {
		return response;
	};

	get = (route: string, additionalOptions?: any): Promise<any> => {
		const options = {
			...additionalOptions,
			baseURL: BASE_URL,
			withCredentials: true
		};
		return axios
			.get(route, options)
			.then(res => res.data)
			.then(this.defaultOnSuccess)
			.catch(this.defaultOnError);
	};

	post = (route: string, params: any, additionalOptions?: any): Promise<any> => {
		const options = {
			...additionalOptions,
			headers: { 'Content-Type': 'application/json' },
			baseURL: BASE_URL,
			withCredentials: true
		};
		return axios
			.post(route, params, options || {})
			.then(res => res.data)
			.then(this.defaultOnSuccess)
			.catch(this.defaultOnError);
	};
}
