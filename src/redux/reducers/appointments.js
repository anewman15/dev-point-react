const appointments = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_APPOINTMENTS': {
      return action.payload.appointments;
    }

    default: {
      return state;
    }
  }
};

export default appointments;
