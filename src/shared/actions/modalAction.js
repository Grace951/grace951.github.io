import * as types from './actionTypes';

export function changeXsNavModal(modal) {
  return dispatch => {
    dispatch({type: types.CHANGE_XSNAV_OPEN, modal});
  };
}

let hideXsNavAction = {type: types.CHANGE_XSNAV_OPEN, modal: false};

export {hideXsNavAction};
