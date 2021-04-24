const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_CURRENT_USER': {
      return action.payload.currentUser;
    }

    default: {
      return state;
    }
  }
};

export default currentUser;
