import React, { Component, PropTypes } from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import MdArrorUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdArrorDown from 'react-icons/lib/md/keyboard-arrow-down';
import style from './style.scss';

class QuestionInfo extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  };
  renderTags = () => {
    const { tags } = this.props.question;
    return tags.map((tag) => (
      <div className={style.tag}>
        <Chip>{tag}</Chip>
      </div>
    ));
  };
  render() {
    const { title, comments, votes } = this.props.question;
    return (
      <div className={style.questionInfo}>
        <div className={style.votes}>
          <MdArrorUp className={style.upVote} />
          <div className={style.count}>{votes}</div>
          <MdArrorDown className={style.downVote} />
        </div>
        <div>
          <CardTitle title={title} subtitle={`${comments}則回應`} />
          <CardText>
            <div className={style.tagList}>
              {this.renderTags()}
            </div>
          </CardText>
        </div>
      </div>
    );
  }
}

export default QuestionInfo;

