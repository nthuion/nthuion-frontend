import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import QuestionList from './QuestionList';
import Section from '../common/Section';
import Container from '../common/Container';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MdCreate from 'react-icons/lib/md/create';
import { fetchQuestionList } from './actions';
import style from './style.scss';

class QuestionListPage extends Component {
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
      <div>
        <Section>
          <Container>
            <Subheader>所有問題</Subheader>
            <QuestionList questions={questions} />
          </Container>
        </Section>
        <Link to="/q/create">
          <FloatingActionButton className={style.createButton}>
            <MdCreate />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionList.questions,
});

export default connect(mapStateToProps)(QuestionListPage);

