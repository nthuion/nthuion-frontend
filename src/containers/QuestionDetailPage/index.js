import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Section from '../common/Section';
import Container from '../common/Container';
import QuestionDetail from './QuestionDetail';
import CommentForm from '../CommentForm';
import CommentList from './CommentList';
import { fetchQuestion, fetchComments } from './actions';

class QuestionDetailPage extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { id } = this.props.params;
    this.props.dispatch(fetchQuestion(id));
    this.props.dispatch(fetchComments(id));
  }
  render() {
    const { question, comments, params: { id } } = this.props;
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
            <Subheader>所有回應</Subheader>
            <CommentList comments={comments} />
          </Section>
          <Section>
            <CommentForm qid={id} />
          </Section>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.questionDetail;

export default connect(mapStateToProps)(QuestionDetailPage);

