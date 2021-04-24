import { combineReducers } from 'redux';
import currentUser from './currentUser';
import developers from './developers';
import currentDev from './currentDev';
import appointments from './appointments';

const combinedReducer = combineReducers(
  {
    currentUser,
    developers,
    currentDev,
    appointments,
  },
);

export default combinedReducer;
