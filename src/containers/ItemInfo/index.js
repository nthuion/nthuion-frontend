import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Link } from 'react-router';
import { CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import MdArrorUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdArrorDown from 'react-icons/lib/md/keyboard-arrow-down';
import dateFormat from 'dateformat';
import { upVote, downVote } from './actions';
import style from './style.scss';

/* eslint-disable camelcase */
class ItemInfo extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    isLink: PropTypes.bool,
    item: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  handleUpVote = () => {
    const { type } = this.props;
    const { id } = this.props.item;
    this.props.dispatch(upVote(type, id));
  };
  handleDownVote = () => {
    const { type } = this.props;
    const { id } = this.props.item;
    this.props.dispatch(downVote(type, id));
  };
  renderVotes = () => {
    const { votes, user_vote } = this.props.item;
    return (
      <div className={style.votes}>
        <MdArrorUp
          className={cx(style.upVote, { [style.voted]: user_vote === 1 })}
          onClick={this.handleUpVote}
        />
        <div className={style.count}>{votes}</div>
        <MdArrorDown
          className={cx(style.downVote, { [style.voted]: user_vote === -1 })}
          onClick={this.handleDownVote}
        />
      </div>
    );
  };
  renderTags = () => {
    const { tags } = this.props.item;
    return tags.map((tag) => (
      <div className={style.tag}>
        <Chip>{tag}</Chip>
      </div>
    ));
  };
  renderTime = () => {
    const { ctime } = this.props.item;
    const time = dateFormat(new Date(ctime), 'yyyy-mm-dd HH:mm:ss');
    return <div className={style.createdTime}>{time}</div>;
  };
  renderInfo = () => {
    const { isLink, type } = this.props;
    const { id, title, author } = this.props.item;
    const authorName = author ? author.name : '匿名';
    const info = (
      <div className={style.info}>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{authorName}</div>
        <CardText>
          <div className={style.tagList}>
            {this.renderTags()}
          </div>
        </CardText>
      </div>
    );
    if (isLink) {
      return <Link to={`/${type[0]}/${id}`}>{info}</Link>;
    }
    return info;
  };
  renderEdit = () => {
    const { me, type } = this.props;
    const { id, author } = this.props.item;
    if (!author || me.id !== author.id) {
      return null;
    }
    return <Link className={style.edit} to={`/${type[0]}/${id}/edit`}>編輯</Link>;
  };
  render() {
    return (
      <div className={style.itemInfoContainer}>
        {this.renderVotes()}
        {this.renderInfo()}
        {this.renderTime()}
        {this.renderEdit()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  me: state.auth.me,
});

export default connect(mapStateToProps)(ItemInfo);

