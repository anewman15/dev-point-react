import { SAVE_USER_DETAILS } from './actionTypes';

const saveUserDetails = userDetails => (
  {
    type: SAVE_USER_DETAILS,
    payload: {
      userDetails,
    },
  }
);

export default saveUserDetails;
