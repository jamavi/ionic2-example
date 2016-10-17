import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {User} from '../models';

@Injectable()
export class UserActions {

  static LOAD_USER = 'LOAD_USER';
  loadUser(): Action {
    return {
      type: UserActions.LOAD_USER
    };
  }

  static LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
  loadUserSuccess(user: User): Action {
    return {
      type: UserActions.LOAD_USER_SUCCESS,
      payload: user
    };
  }

  static SET_USER = 'SET_USER';
  setUser(user: User): Action {
    return {
      type: UserActions.SET_USER,
      payload: user
    };
  }

  static SIGN_UP = 'SIGN_UP';
  signUp(user: User): Action {
    return {
      type: UserActions.SIGN_UP,
      payload: user
    };
  }

  static SET_USER_SUCCESS = 'SET_USER_SUCCESS';
  setUserSuccess(user: User): Action {
    return {
      type: UserActions.SET_USER_SUCCESS,
      payload: user
    };
  }

  static SET_PICTURE = 'SET_PICTURE';
  setPicture(picture: string): Action {
    return {
      type: UserActions.SET_PICTURE,
      payload: picture
    };
  }

  static SET_NAME = 'SET_NAME';
  setName(name: string): Action {
    return {
      type: UserActions.SET_NAME,
      payload: name
    };
  }

  static LOG_OUT = 'LOG_OUT';
  logOut(): Action {
    return {
      type: UserActions.LOG_OUT
    };
  }

  static LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
  logOutSuccess(): Action {
    return {
      type: UserActions.LOG_OUT_SUCCESS
    };
  }
  
}