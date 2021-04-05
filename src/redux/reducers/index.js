import { combineReducers } from 'redux';
import authStatus from './authStatus';
import userDetails from './userDetails';

const combinedReducer = combineReducers({
  authStatus, userDetails,
});

export default combinedReducer;
