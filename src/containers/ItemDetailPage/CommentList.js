import React, { PropTypes } from 'react';
import Transition from 'react-addons-css-transition-group';
import CommentListItem from './CommentListItem';
import style from './style.scss';

function renderList(comments) {
  return comments.map((comment) => (
    <div key={comment.id}>
      <CommentListItem comment={comment} />
    </div>
  ));
}

const CommentList = ({ comments }) => (
  <Transition
    className={style.commentList}
    transitionName={style}
    transitionEnterTimeout={500}
    transitionLeave={false}
  >
    {renderList(comments)}
  </Transition>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;

