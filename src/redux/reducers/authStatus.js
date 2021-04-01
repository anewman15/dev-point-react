const authStatus = (state = null, action) => {
  switch (action.type) {
    case 'SAVE_AUTH_STATUS': {
      return action.payload.authStatus;
    }

    default: {
      return state;
    }
  }
};

export default authStatus;
