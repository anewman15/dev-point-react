const developers = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_DEVELOPERS': {
      return action.payload.developers;
    }

    default: {
      return state;
    }
  }
};

export default developers;
