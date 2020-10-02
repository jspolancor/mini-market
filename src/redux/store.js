import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import reducers from './reducers';

export default function createReduxStore (name, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
  let store = createStore(reducers, initialState, middleware);
  sagaMiddleware.run(rootSaga);

  return store
}