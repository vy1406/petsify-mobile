import AjaxService from './ajax.service';

export default class DataService {
	constructor() {
		if (DataService.instance) {
			return DataService.instance;
		}
		DataService.instance = this;
		this.ajaxService = new AjaxService();
	}

	static instance: DataService;
	ajaxService: any;

	getUser = (userId: number) => {
		return this.ajaxService.get(`test`);
	};
}
