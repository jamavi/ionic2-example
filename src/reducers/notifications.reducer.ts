import { ActionReducer, Action } from '@ngrx/store';

import { NotificationsActions } from '../actions';

const initialState: any = {
  toastMsg: null,
  errorMsg: null,
  loadingMsg: null
};

export const notificationsReducer: ActionReducer<any> = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case NotificationsActions.API_CALL_FAIL:
    case NotificationsActions.API_ERROR:
    case NotificationsActions.API_TIMEOUT:
    case NotificationsActions.SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        toastMsg: null,
        errorMsg: action.payload,
        loadingMsg: null
      });
    case NotificationsActions.SET_TOAST_MESSAGE:
      return Object.assign({}, state, {
        toastMsg: action.payload,
        errorMsg: null,
        loadingMsg: null
      });
    case NotificationsActions.SET_LOADING_MESSAGE:
      return Object.assign({}, state, {
        toastMsg: null,
        errorMsg: null,
        loadingMsg: action.payload
      });
    default:
      return state;
  };
}