import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IState, reducer, initialState } from '../reducers';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  sagaMiddleware,
  logger,
];

const store = createStore<IState>(
  reducer(),
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(saga);

export default store;
