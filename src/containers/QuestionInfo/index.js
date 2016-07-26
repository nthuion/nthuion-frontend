import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import MdArrorUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdArrorDown from 'react-icons/lib/md/keyboard-arrow-down';
import { upVote, downVote } from './actions';
import style from './style.scss';

class QuestionInfo extends Component {
  static propTypes = {
    isLink: PropTypes.bool,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  handleUpVote = () => {
    const { id } = this.props.question;
    this.props.dispatch(upVote(id));
  };
  handleDownVote = () => {
    const { id } = this.props.question;
    this.props.dispatch(downVote(id));
  };
  renderVotes = () => {
    const { votes } = this.props.question;
    return (
      <div className={style.votes}>
        <MdArrorUp className={style.upVote} onClick={this.handleUpVote} />
        <div className={style.count}>{votes}</div>
        <MdArrorDown className={style.downVote} onClick={this.handleDownVote} />
      </div>
    );
  };
  renderTags = () => {
    const { tags } = this.props.question;
    return tags.map((tag) => (
      <div className={style.tag}>
        <Chip>{tag}</Chip>
      </div>
    ));
  };
  renderInfo = () => {
    const { isLink } = this.props;
    const { id, title, ncomments } = this.props.question;
    const info = (
      <div>
        <CardTitle title={title} subtitle={`${ncomments}則回應`} />
        <CardText>
          <div className={style.tagList}>
            {this.renderTags()}
          </div>
        </CardText>
      </div>
    );
    if (isLink) {
      return <Link to={`/q/${id}`}>{info}</Link>;
    }
    return info;
  };
  render() {
    return (
      <div className={style.questionInfo}>
        {this.renderVotes()}
        {this.renderInfo()}
      </div>
    );
  }
}

export default connect()(QuestionInfo);

