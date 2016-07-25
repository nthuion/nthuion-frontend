import { loadModule } from './index';
import QuestionListPage from '../containers/QuestionListPage';

/* eslint-disable global-require */
function getRoutes(store, isLogin) {
  return [{
    indexRoute: {
      component: QuestionListPage,
    },
  }, {
    path: 'create',
    onEnter(nextState, replace) {
      if (!isLogin()) {
        replace('/login');
      }
    },
    getComponent(nextState, callback) {
      require(['../containers/CreateQuestionPage'], loadModule(callback));
    },
  }];
}

export default getRoutes;

