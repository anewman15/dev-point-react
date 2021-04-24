import { SAVE_APPOINTMENTS } from './actionTypes';

const saveAppointments = appointments => ({
  type: SAVE_APPOINTMENTS,
  payload: {
    appointments,
  },
});

export default saveAppointments;
