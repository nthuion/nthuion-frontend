import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import QuestionListItem from './QuestionListItem';

function renderList(questions) {
  return questions.map((question, i) => (
    <div key={question.id}>
      {i === 0 ? null : <Divider />}
      <QuestionListItem question={question} />
    </div>
  ));
}

const QuestionList = ({ questions }) => (
  <Card>{renderList(questions)}</Card>
);

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default QuestionList;

