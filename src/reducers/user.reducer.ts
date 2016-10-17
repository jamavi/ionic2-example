import {ActionReducer, Action} from '@ngrx/store';

import { UserActions } from '../actions';
import { UserState} from '../models';

const initialState: UserState = {
  currentUser: {},
  hasLoggedIn: false
};

export const userReducer: ActionReducer<UserState> = (state: UserState = initialState, action: Action) => {
  let currentUser;
  switch (action.type) {
    case UserActions.LOAD_USER_SUCCESS:
    case UserActions.SET_USER_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.payload ? action.payload : {}, 
        hasLoggedIn: action.payload ? true : false
      });
    case UserActions.SET_PICTURE:
      currentUser = Object.assign({}, state.currentUser, {picture: action.payload});
      return Object.assign({}, state, { currentUser });
    case UserActions.SET_NAME:
      currentUser = Object.assign({}, state.currentUser, {username: action.payload});
      return Object.assign({}, state, { currentUser });
    case UserActions.LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        currentUser: {}, 
        hasLoggedIn: false
      });
    default:
      return state;
  };
}