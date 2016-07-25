import React, { PropTypes } from 'react';
import QuestionInfo from '../QuestionInfo';

const QuestionListItem = ({ question }) => (
  <div>
    <QuestionInfo question={question} isLink />
  </div>
);

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionListItem;

