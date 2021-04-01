const authStatus = (state = null, action) => {
  console.log(`Reducer auth: ${action.payload}`);
  switch (action.type) {
    case 'SAVE_AUTH_STATUS': {
      return {
        ...state,
        authStatus: action.payload.authStatus,
      };
    }

    default: {
      return state;
    }
  }
};

export default authStatus;
