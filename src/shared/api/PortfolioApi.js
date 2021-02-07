import axios from 'axios';
import { ajaxErr } from '../lib/ajax';

class PortfolioApi {
	static getAllPortfolio() {
		return axios({
			method: 'get',
			url: '/api/works.json',
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
			url: '/api/recentWorks.json',
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
			url: '/api/f2eWorks.json',
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
			url: '/api/graphicDesign.json',
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
