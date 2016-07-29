import { loadModule } from './index';
import SolutionListPage from '../containers/Solution/List';

/* eslint-disable global-require */
function getRoutes(store, isLogin) {
  return [{
    indexRoute: {
      component: SolutionListPage,
    },
  }, {
    path: 'create',
    onEnter(nextState, replace) {
      if (!isLogin()) {
        replace('/login');
      }
    },
    getComponent(nextState, callback) {
      require(['../containers/Solution/Create'], loadModule(callback));
    },
  }, {
    path: ':id',
    getComponent(nextState, callback) {
      require(['../containers/Solution/Detail'], loadModule(callback));
    },
  }];
}

export default getRoutes;

