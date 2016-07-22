import React, { Component, PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
  };
  static defaultProps = {
    questions: [],
  };
  renderList = () => {
    const { questions } = this.props;
    return questions.map((question, i) => (
      <div key={question.id}>
        {i === 0 ? null : <Divider />}
        <QuestionListItem {...question} />
      </div>
    ));
  };
  render() {
    return (
      <Card>
        {this.renderList()}
      </Card>
    );
  }
}

export default QuestionList;

