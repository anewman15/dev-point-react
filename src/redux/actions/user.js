import { SAVE_AUTH_STATUS, SAVE_USER_DETAILS } from './actionTypes';

const saveAuthStatus = authStatus => (
  {
    type: SAVE_AUTH_STATUS,
    payload: {
      authStatus: authStatus.status,
    },
  }
);

const saveUserDetails = userDetails => (
  {
    type: SAVE_USER_DETAILS,
    payload: {
      userDetails,
    },
  }
);

export { saveAuthStatus, saveUserDetails };
