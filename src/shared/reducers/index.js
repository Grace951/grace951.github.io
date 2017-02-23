import { combineReducers } from 'redux';
import portfolio from './portfolioReducer';
import recents from './recentsReducer';
import details from './detailsReducer';
import modal from './modalReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  portfolio,
  recents,
  details,
  modal,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
