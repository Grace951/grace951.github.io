import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function f2eWorksReducer(state = initialState.f2eWorks, action) {
  switch (action.type) {
    case types.LOAD_F2E_WORK_SUCCESS:
      return action.f2eWorks;
    default:
      return state;
  }
}
