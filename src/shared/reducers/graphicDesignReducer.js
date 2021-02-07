import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function graphicDesignReducer(state = initialState.graphicDesign, action) {
  switch (action.type) {
    case types.LOAD_GRAPHIC_DESIGN_SUCCESS:
      return action.graphicDesign;
    default:
      return state;
  }
}
