import { push } from 'react-router-redux';

import * as auth from '../containers/Auth/actions';
import * as questionInfo from '../containers/QuestionInfo/actions';
import * as questionList from '../containers/QuestionListPage/actions';
import * as questionDetail from '../containers/QuestionDetailPage/actions';
import * as createQuestion from '../containers/CreateQuestionPage/actions';
import * as commentForm from '../containers/CommentForm/actions';
export {
  auth,
  questionInfo,
  questionList,
  questionDetail,
  createQuestion,
  commentForm,
};

export const routing = {
  push(path) {
    return push(path);
  },
};

