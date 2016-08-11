import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './core/Root';
import configureStore from './core/store';
import ga from './utils/GoogleAnalytics';

injectTapEventPlugin();

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

history.listen((location) => {
  ga.pageview(location.pathname);
});

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/Root', () => {
    const NextRoot = require('./core/Root').default; // eslint-disable-line global-require
    render(
      <NextRoot store={store} history={history} />,
      document.getElementById('root')
    );
  });
}

