import axios from 'axios';
import {ajaxErr} from '../lib/ajax';

class PortfolioApi {
  static getAllPortfolio() {
	return axios({
		method: 'get',
		url: 'data/works.json',
		dataType: 'JSON'
	}).then((response) => {
		return response.data;
	}).catch(function (error) {
			let err = new ajaxErr(error);
			throw(err);
		});
  }
  static getRecentsWorks() {
	return axios({
		method: 'get',
		url: 'data/recents.json',
		dataType: 'JSON'
	}).then((response) => {
		return response.data;
	}).catch(function (error) {
			let err = new ajaxErr(error);
			throw(err);
		});
  }
  static getDetails(id) {
	return axios({
		method: 'get',
		url: 'data/works.json',
		dataType: 'JSON'
	}).then((response) => {
		return response.data[id];
	}).catch(function (error) {
			let err = new ajaxErr(error);
			throw(err);
		});
  }
}

export default PortfolioApi;
