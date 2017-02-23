import * as types from './actionTypes';
import PortfolioApi from '../api/PortfolioApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const loadPortfolioSuccess = (products) => ({ type: types.LOAD_POERTFOLIO_SUCCESS, products });
const loadRecentsWorksSuccess = (products) => ({ type: types.LOAD_RECENT_WORKS_SUCCESS, products });
const loadDetailsSuccess = (products) => ({ type: types.LOAD_DERAILS_SUCCESS, products });

export function loadPortfolio() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getAllPortfolio()
      .then(works => {
        dispatch(loadPortfolioSuccess(works));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}

export function loadRecentsWorks() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getRecentsWorks()
      .then(workd => {
        dispatch(loadRecentsWorksSuccess(workd));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}

export function loadDetails(id) {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getDetails(id)
      .then(details => {
        dispatch(loadDetailsSuccess(details));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}
