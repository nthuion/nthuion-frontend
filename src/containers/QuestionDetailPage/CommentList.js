import React, { Component, PropTypes } from 'react';
import CommentListItem from './CommentListItem';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };
  renderList = () => {
    const { comments } = this.props;
    return comments.map((comment) => (
      <CommentListItem key={comment.id} comment={comment} />
    ));
  };
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default CommentList;

