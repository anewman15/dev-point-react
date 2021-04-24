/* eslint-disable no-unused-expressions */
import { createStore } from 'redux';
import { saveDevPointToLocaStorage, loadDevPointFromLocalStorage } from './persist';
import combinedReducer from '../reducers';

const persistedDevPoint = loadDevPointFromLocalStorage();

const store = createStore(combinedReducer, persistedDevPoint);

store.subscribe(() => saveDevPointToLocaStorage(store.getState()));

export default store;
