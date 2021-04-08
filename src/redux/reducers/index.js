import { combineReducers } from 'redux';
import authStatus from './authStatus';
import userDetails from './userDetails';
import developers from './developers';
import currentDev from './currentDev';
import appointments from './appointments';

const combinedReducer = combineReducers(
  {
    authStatus,
    userDetails,
    developers,
    currentDev,
    appointments,
  },
);

export default combinedReducer;
