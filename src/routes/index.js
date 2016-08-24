import App from '../containers/App';
import HomePage from '../containers/HomePage';
import getIssueRoutes from './issue';
import getSolutionRoutes from './solution';
import getUserRoutes from './user';

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
  const issueRoutes = getIssueRoutes(store, isLogin);
  const solutionRoutes = getSolutionRoutes(store, isLogin);
  const userRoutes = getUserRoutes(store, isLogin);

  return [{
    path: '/',
    indexRoute: {
      component: HomePage,
    },
  }, {
    path: '/',
    component: App,
    childRoutes: [{
      path: 'i',
      childRoutes: issueRoutes,
    }, {
      path: 's',
      childRoutes: solutionRoutes,
    }, {
      path: 'u',
      childRoutes: userRoutes,
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
  }];
}

export default getRoutes;

