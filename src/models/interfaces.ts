export interface User {
  email?: string;
  username?: string;
  password?: string;
  picture?: string;
}

export interface UserState {
  currentUser: User;
  hasLoggedIn: boolean;
}

export interface AppState {
  userState: UserState;
  notifications: { toastMsg: string, errorMsg: string, loadingMsg: string };
}