import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import Section from '../common/Section';
import Container from '../common/Container';
import Subheader from 'material-ui/Subheader';
import { fetchQuestionList } from './actions';

class Question extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.fetchQuestions();
  }
  fetchQuestions = () => {
    this.props.dispatch(fetchQuestionList());
  };
  render() {
    const { questions } = this.props;
    return (
      <Section>
        <Container>
          <Subheader>所有問題</Subheader>
          <QuestionList questions={questions} />
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question.questions,
});

export default connect(mapStateToProps)(Question);

