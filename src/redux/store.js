import { createStore } from 'redux';
import authStatus from './reducers/authStatus';

export default createStore(authStatus, { authStatus: null });
