import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';
import DevTools from 'components/DevTools';
import multi from 'redux-multi'

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const enhancer = compose(
  applyMiddleware(thunk, logger, multi),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  console.log(rootReducer);
  console.log('getState',store.getState());
  if (module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers'))
    );
  }

  return store;
}
