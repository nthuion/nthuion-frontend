import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import MdArrorUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdArrorDown from 'react-icons/lib/md/keyboard-arrow-down';
import dateFormat from 'dateformat';
import { upVote, downVote } from './actions';
import style from './style.scss';

class ItemInfo extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    isLink: PropTypes.bool,
    item: PropTypes.object.isRequired,
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
    const { votes } = this.props.item;
    return (
      <div className={style.votes}>
        <MdArrorUp className={style.upVote} onClick={this.handleUpVote} />
        <div className={style.count}>{votes}</div>
        <MdArrorDown className={style.downVote} onClick={this.handleDownVote} />
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
    const { id, title, ncomments } = this.props.item;
    const info = (
      <div>
        {this.renderTime()}
        <CardTitle title={title} subtitle={`${ncomments}則回應`} />
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
  render() {
    return (
      <div className={style.itemInfo}>
        {this.renderVotes()}
        {this.renderInfo()}
      </div>
    );
  }
}

export default connect()(ItemInfo);

