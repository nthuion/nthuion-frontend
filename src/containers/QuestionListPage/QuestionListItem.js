import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import QuestionInfo from '../QuestionInfo';
import style from './style.scss';

const QuestionListItem = ({ question }) => (
  <Link to={`/q/${question.id}`} className={style.questionListItem}>
    <QuestionInfo question={question} />
  </Link>
);

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionListItem;

