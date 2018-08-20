import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { coreReducer } from './reducer.js';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCoreReducer = persistReducer(persistConfig, coreReducer);

const middleware = [thunk];
let devtools;

if (process.env.NODE_ENV === 'development') {
  if (window.devToolsExtension) {
    devtools = window.devToolsExtension();
  } else {
    middleware.push(logger);
    devtools = f => f;
  }
} else {
  devtools = f => f;
}

const enhancer = compose(
  applyMiddleware(...middleware),
  devtools,
);

export const store = createStore(
  combineReducers({
    core: persistedCoreReducer,
  }),
  enhancer,
);

export const persistor = persistStore(store);