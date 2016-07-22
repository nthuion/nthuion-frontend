import App from '../containers/App';
import Home from '../containers/App/Home';

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

  return {
    path: '/',
    component: App,
    childRoutes: [{
      onEnter(nextState, replace) {
        if (!isLogin()) {
          replace('/login');
        }
      },
      indexRoute: {
        component: Home,
      },
      childRoutes: [{
        path: '/q',
        getComponent(nextState, callback) {
          require(['../containers/QuestionListPage'], loadModule(callback));
        },
      }],
    }, {
      path: '/login',
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

