import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recentsReducer(state = initialState.recents, action) {
  switch (action.type) {
    case types.LOAD_RECENT_WORKS_SUCCESS:
      return action.recents;
    default:
      return state;
  }
}
