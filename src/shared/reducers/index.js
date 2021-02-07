import { combineReducers } from 'redux';
import portfolio from './portfolioReducer';
import recents from './recentsReducer';
import details from './detailsReducer';
import graphicDesign from './graphicDesignReducer';
import f2eWorks from './f2eWorksReducer';
import modal from './modalReducer';
import device from './deviceReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  portfolio,
  recents,
  f2eWorks,
  graphicDesign,
  details,
  modal,
  device,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
