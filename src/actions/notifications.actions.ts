import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class NotificationsActions {

  static API_CALL_FAIL = 'API_CALL_FAIL';
  apiCallFail(message: string): Action {
    return {
      type: NotificationsActions.API_CALL_FAIL,
      payload: message
    };
  }

  static API_ERROR = 'API_ERROR';
  apiError(message: string): Action {
    return {
      type: NotificationsActions.API_ERROR,
      payload: message
    };
  }

  static API_TIMEOUT = 'API_TIMEOUT';
  apiTimeout(message: string): Action {
    return {
      type: NotificationsActions.API_TIMEOUT,
      payload: message
    };
  }

  static SET_TOAST_MESSAGE = 'SET_TOAST_MESSAGE';
  setToastMsg(message: string): Action {
    return {
      type: NotificationsActions.SET_TOAST_MESSAGE,
      payload: message
    };
  }

  static SET_LOADING_MESSAGE = 'SET_LOADING_MESSAGE';
  setLoadingMsg(message: string): Action {
    return {
      type: NotificationsActions.SET_LOADING_MESSAGE,
      payload: message
    };
  }

  static SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
  setErrorMsg(message: string): Action {
    return {
      type: NotificationsActions.SET_ERROR_MESSAGE,
      payload: message
    };
  }
}