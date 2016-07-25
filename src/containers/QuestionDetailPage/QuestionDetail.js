import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import QuestionInfo from '../QuestionInfo';

const QuestionDetail = ({ question }) => (
  <Card>
    <QuestionInfo question={question} />
    <CardText>
      {question.content}
    </CardText>
  </Card>
);

QuestionDetail.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionDetail;

