/* eslint-disable global-require */
function loadModule(callback) {
  return (componentModule) => {
    callback(null, componentModule.default);
  };
}

const routes = [{
  path: '/',
}, {
  path: '/login',
  getComponent(nextState, callback) {
    require(['../containers/Auth'], loadModule(callback));
  },
}];

export default routes;

