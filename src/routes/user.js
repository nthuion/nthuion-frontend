import { loadModule } from './index';

/* eslint-disable global-require */
function getRoutes() {
  return [{
    path: 'me',
    getComponent(nextState, callback) {
      require(['../containers/UserInfoPage/Me'], loadModule(callback));
    },
  }, {
    path: ':id',
    getComponent(nextState, callback) {
      require(['../containers/UserInfoPage/Other'], loadModule(callback));
    },
  }];
}

export default getRoutes;

