import { SAVE_DEVELOPERS, SAVE_CURRENT_DEV } from './actionTypes';

const saveDevelopers = developers => (
  {
    type: SAVE_DEVELOPERS,
    payload: {
      developers,
    },
  }
);

const saveCurrentDev = dev => (
  {
    type: SAVE_CURRENT_DEV,
    payload: {
      dev,
    },
  }
);

export { saveDevelopers, saveCurrentDev };
