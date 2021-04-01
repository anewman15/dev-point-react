import createStore from 'redux';
import authStatus from './reducers/authStatus';

const initialAuthStatus = { authStatus: false };

export default createStore(authStatus, initialAuthStatus);
