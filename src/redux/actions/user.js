import { SAVE_CURRENT_USER } from './actionTypes';

const saveCurrentUser = currentUser => (
  {
    type: SAVE_CURRENT_USER,
    payload: {
      currentUser,
    },
  }
);

export default saveCurrentUser;
