import { loadModule } from './index';
import IssueListPage from '../containers/Issue/List';

/* eslint-disable global-require */
function getRoutes(store, isLogin) {
  return [{
    indexRoute: {
      component: IssueListPage,
    },
  }, {
    path: 'create',
    onEnter(nextState, replace) {
      if (!isLogin()) {
        replace('/login');
      }
    },
    getComponent(nextState, callback) {
      require(['../containers/Issue/Create'], loadModule(callback));
    },
  }, {
    path: ':id',
    getComponent(nextState, callback) {
      require(['../containers/Issue/Detail'], loadModule(callback));
    },
  }, {
    path: ':id/edit',
    getComponent(nextState, callback) {
      require(['../containers/Issue/Edit'], loadModule(callback));
    },
  }];
}

export default getRoutes;

