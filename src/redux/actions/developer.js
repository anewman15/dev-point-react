import { SAVE_DEVELOPERS } from './actionTypes';

const saveDevelopers = developers => (
  {
    type: SAVE_DEVELOPERS,
    payload: {
      developers,
    },
  }
);

export default saveDevelopers;
