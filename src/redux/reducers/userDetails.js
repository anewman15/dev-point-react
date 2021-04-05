const userDetails = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_USER_DETAILS': {
      return action.payload.userDetails;
    }

    default: {
      return state;
    }
  }
};

export default userDetails;
