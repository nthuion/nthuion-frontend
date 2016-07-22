import App from '../containers/App';
import QuestionListPage from '../containers/QuestionListPage';

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
        component: QuestionListPage,
      },
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

