import { combineReducers } from 'redux';
import authStatus from './authStatus';

const combinedReducer = combineReducers({
  authStatus,
});

export default combinedReducer;
