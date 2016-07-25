import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Section from '../common/Section';
import Container from '../common/Container';
import { fetchQuestion } from './actions';

class QuestionDetailPage extends Component {
  static propTypes = {
    question: PropTypes.object,
    dispatch: PropTypes.func,
  };
  render() {
    if (!this.props.question) {
      return null;
    }
    const { title, content } = this.props.question;
    return (
      <Section>
        <Container>
          <Card>
            <CardTitle title={title} />
            <CardText>{content}</CardText>
          </Card>
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.questionDetail.question,
});

export default connect(mapStateToProps)(QuestionDetailPage);

