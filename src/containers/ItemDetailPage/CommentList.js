import React, { PropTypes } from 'react';
import Transition from 'react-addons-css-transition-group';
import CommentListItem from './CommentListItem';
import style from './style.scss';

function renderList(me, comments) {
  return comments.map((comment) => (
    <div key={comment.id}>
      <CommentListItem me={me} comment={comment} />
    </div>
  ));
}

const CommentList = ({ me, comments = [] }) => (
  <Transition
    className={style.commentList}
    transitionName={style}
    transitionEnterTimeout={500}
    transitionLeave={false}
  >
    {renderList(me, comments)}
  </Transition>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  me: PropTypes.object.isRequired,
};

export default CommentList;

