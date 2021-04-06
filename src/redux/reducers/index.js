import { combineReducers } from 'redux';
import authStatus from './authStatus';
import userDetails from './userDetails';
import developers from './developers';
import currentDev from './currentDev';

const combinedReducer = combineReducers(
  {
    authStatus,
    userDetails,
    developers,
    currentDev,
  },
);

export default combinedReducer;
