import { SAVE_APPOINTMENTS } from './actionTypes';

const saveAppoinments = appointments => ({
  type: SAVE_APPOINTMENTS,
  payload: {
    appointments,
  },
});

export default saveAppoinments;
