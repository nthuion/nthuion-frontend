import App from '../containers/App';
import getQuestionRoutes from './question';

/* eslint-disable global-require */
export function loadModule(callback) {
  return (componentModule) => {
    callback(null, componentModule.default);
  };
}

function getRoutes(store) {
  function isLogin() {
    return !!store.getState().auth.apiToken;
  }
  const questionRoutes = getQuestionRoutes(store, isLogin);

  return {
    path: '/',
    component: App,
    indexRoute: {
      onEnter(nextState, replace) {
        replace('/q');
      },
    },
    childRoutes: [{
      path: 'q',
      childRoutes: questionRoutes,
    }, {
      path: 'login',
      onEnter(nextState, replace) {
        if (isLogin()) {
          replace('/');
        }
      },
      getComponent(nextState, callback) {
        require(['../containers/Auth'], loadModule(callback));
      },
    }],
  };
}

export default getRoutes;

