const currentDev = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_CURRENT_DEV': {
      return action.payload.dev;
    }

    default: {
      return state;
    }
  }
};

export default currentDev;
