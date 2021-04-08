const appoinments = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_APPOINTMENT': {
      return action.payload.appoinments;
    }

    default: {
      return state;
    }
  }
};

export default appoinments;
