import { SAVE_AUTH_STATUS, SAVE_USER_DETAILS } from './actionTypes';

const saveAuthStatus = authStatus => (
  {
    type: SAVE_AUTH_STATUS,
    payload: {
      authStatus,
    },
  }
);

export { saveAuthStatus };
