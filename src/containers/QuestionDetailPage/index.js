import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Section from '../common/Section';
import Container from '../common/Container';
import QuestionDetail from './QuestionDetail';
import CommentForm from '../CommentForm';
import { fetchQuestion, fetchComments } from './actions';

class QuestionDetailPage extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { id } = this.props.params;
    this.props.dispatch(fetchQuestion(id));
    this.props.dispatch(fetchComments(id));
  }
  render() {
    const { question, params: { id } } = this.props;
    if (!question) {
      return null;
    }
    return (
      <div>
        <Container>
          <Section>
            <QuestionDetail question={question} />
          </Section>
          <Section>
            <CommentForm qid={id} />
          </Section>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.questionDetail.question,
});

export default connect(mapStateToProps)(QuestionDetailPage);

