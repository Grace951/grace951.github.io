import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function portfolioReducer(state = initialState.portfolio, action) {
  switch (action.type) {
    case types.LOAD_POERTFOLIO_SUCCESS:
      return action.portfolio;
    default:
      return state;
  }
}
