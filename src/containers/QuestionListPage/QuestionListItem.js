import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import MdArrorUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdArrorDown from 'react-icons/lib/md/keyboard-arrow-down';
import style from './style.scss';

class QuestionListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    tags: PropTypes.array,
  };
  renderTags = () => {
    const { tags } = this.props;
    return tags.map((tag) => (
      <div className={style.tag}>
        <Chip>{tag}</Chip>
      </div>
    ));
  };
  render() {
    const { id, title, comments, votes } = this.props;
    return (
      <Link to={`/q/${id}`} className={style.questionListItem}>
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
      </Link>
    );
  }
}

export default QuestionListItem;

