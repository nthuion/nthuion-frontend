import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

function renderHeader(author) {
  if (author) {
    return (
      <CardHeader
        title={author.name}
        avatar={author.avatar_url}
      />
    );
  }
  return <CardHeader title="匿名" />;
}

const CommentListItem = ({ comment }) => {
  const { author, content } = comment;
  return (
    <Card>
      {renderHeader(author)}
      <CardText>
        {content}
      </CardText>
    </Card>
  );
};

CommentListItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentListItem;

