import { push } from 'react-router-redux';

import * as auth from '../containers/Auth/actions';
import * as question from '../containers/QuestionListPage/actions';
export { auth, question };

export const routing = {
  push(path) {
    return push(path);
  },
};

