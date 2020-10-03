import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootSaga from './sagas';
import rootReducer from './reducers';

export default function createReduxStore (name, initialState = {}) {
  const persistedReducer = persistReducer({
    key: 'mini-market',
    storage,
  }, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
  let store = createStore(persistedReducer, initialState, middleware);
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga);

  return { store, persistor }
}