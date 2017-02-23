import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function detailsReducer(state = initialState.details, action) {
  switch (action.type) {
    case types.LOAD_DERAILS_SUCCESS:
      return action.details;
    default:
      return state;
  }
}
