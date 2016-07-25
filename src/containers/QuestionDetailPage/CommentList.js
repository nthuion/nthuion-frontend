import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import CommentListItem from './CommentListItem';

function renderList(comments) {
  return comments.map((comment, i) => (
    <div key={comment.id}>
      {i === 0 ? null : <Divider />}
      <CommentListItem comment={comment} />
    </div>
  ));
}

const CommentList = ({ comments }) => (
  <Card>{renderList(comments)}</Card>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;

