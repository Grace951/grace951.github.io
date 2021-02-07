import * as types from './actionTypes';
import PortfolioApi from '../api/PortfolioApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const loadPortfolioSuccess = (portfolio) => ({ type: types.LOAD_POERTFOLIO_SUCCESS, portfolio });
const loadRecentsWorksSuccess = (recents) => ({ type: types.LOAD_RECENT_WORKS_SUCCESS, recents });
const loadDetailsSuccess = (details) => ({ type: types.LOAD_DERAILS_SUCCESS, details });
const loadF2eWorksSuccess = (f2eWorks) => ({ type: types.LOAD_F2E_WORK_SUCCESS, f2eWorks });
const loadGraphicDesignSuccess = (graphicDesign) => ({ type: types.LOAD_GRAPHIC_DESIGN_SUCCESS, graphicDesign });

export function loadPortfolio() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getAllPortfolio()
      .then(portfolio => {
        dispatch(loadPortfolioSuccess(portfolio));
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
      .then(works => {
        dispatch(loadRecentsWorksSuccess(works));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}
export function loadF2eWorks() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getF2eWorks()
      .then(f2eWorks => {
        dispatch(loadF2eWorksSuccess(f2eWorks));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}

export function loadDetails({params}) {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getDetails(params.id)
      .then(details => {
        dispatch(loadDetailsSuccess(details));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}
export function loadGraphicDesign() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    return PortfolioApi.getGraphicDesign()
      .then(graphicDesign => {
        dispatch(loadGraphicDesignSuccess(graphicDesign));
      })
      .catch(error => {
        dispatch(ajaxCallError()); 
        throw(error);
      });
  };
}
