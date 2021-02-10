import axios from 'axios';
import { ajaxErr } from '../lib/ajax';

let prefix = "";
if (!process.env.BROWSER) {
	//SSR
	console.log("process.env.ENABLE_SSL", process.env.ENABLE_SSL);
	prefix = process.env.ENABLE_SSL=="1"?"https://":"http://" + process.env.NGINX_HOST;
}

class PortfolioApi {
	static getAllPortfolio() {
		return axios({
			method: 'get',
			url: prefix + '/api/works.json',
			dataType: 'JSON'
		}).then((response) => {
			return response.data;
		}).catch(function (error) {
			let err = new ajaxErr(error);
			throw (err);
		});
	}
	static getRecentsWorks() {
		return axios({
			method: 'get',
			url: prefix + '/api/recentWorks.json',
			dataType: 'JSON'
		}).then((response) => {
			return response.data;
		}).catch(function (error) {
			let err = new ajaxErr(error);
			throw (err);
		});
	}
	static getF2eWorks() {
		return axios({
			method: 'get',
			url: prefix + '/api/f2eWorks.json',
			dataType: 'JSON'
		}).then((response) => {
			return response.data;
		}).catch(function (error) {
			let err = new ajaxErr(error);
			throw (err);
		});
	}
	static getDetails(id) {
		return axios({
			method: 'get',
			url: `/api/work/${id}/details.json`,
			dataType: 'JSON'
		}).then((response) => {
			return response.data;
		}).catch(function (error) {
			let err = new ajaxErr(error);
			throw (err);
		});
	}
	static getGraphicDesign() {
		return axios({
			method: 'get',
			url: prefix + '/api/graphicDesign.json',
			dataType: 'JSON'
		}).then((response) => {
			return response.data;
		}).catch(function (error) {
			let err = new ajaxErr(error);
			throw (err);
		});
	}
}

export default PortfolioApi;
