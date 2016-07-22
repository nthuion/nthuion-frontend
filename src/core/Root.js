import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import getRoutes from '../routes';
import DevTools from './DevTools';

const renderDevTools = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return <DevTools />;
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={getRoutes(store)} />
      {renderDevTools()}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;

