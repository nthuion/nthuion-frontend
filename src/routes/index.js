import App from '../containers/App';
import getIssueRoutes from './issue';
import getSolutionRoutes from './solution';

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

  return {
    path: '/',
    component: App,
    indexRoute: {
      onEnter(nextState, replace) {
        replace('/i');
      },
    },
    childRoutes: [{
      path: 'i',
      childRoutes: issueRoutes,
    }, {
      path: 's',
      childRoutes: solutionRoutes,
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

