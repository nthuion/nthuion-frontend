import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';
import rootSaga from '../sagas';
import DevTools from './DevTools';

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();

export default function configureStore(history) {
  const store = createStore(
    reducer,
    persistedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
      DevTools.instrument()
    )
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 500));

  sagaMiddleware.run(rootSaga, store);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

