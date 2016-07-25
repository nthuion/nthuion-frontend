import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../common/Section';
import Container from '../common/Container';
import QuestionDetail from './QuestionDetail';
import { fetchQuestion } from './actions';

class QuestionDetailPage extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { id } = this.props.params;
    this.props.dispatch(fetchQuestion(id));
  }
  render() {
    const { question } = this.props;
    if (!question) {
      return null;
    }
    return (
      <Section>
        <Container>
          <QuestionDetail {...question} />
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.questionDetail.question,
});

export default connect(mapStateToProps)(QuestionDetailPage);

