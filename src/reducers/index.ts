import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';
import { combineReducers, ActionReducer } from '@ngrx/store';

import { AppState, UserState } from '../models';
import * as fromUser from './user.reducer';
import * as fromNotifications from './notifications.reducer';

export default combineReducers({
  userState: fromUser.userReducer,
  notifications: fromNotifications.notificationsReducer
});

export function getCurrentState() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.userState);
}

export function getNotifications() {
  return (state$: Observable<AppState>) => state$
    .select(s => s.notifications);
}
