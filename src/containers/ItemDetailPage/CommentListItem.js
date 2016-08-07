import React, { PropTypes } from 'react';
import dateFormat from 'dateformat';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ReadOnlyText from '../Editor/ReadOnlyText';

function renderHeader(author, ctime) {
  const time = dateFormat(new Date(ctime), 'yyyy-mm-dd HH:mm:ss');
  if (author) {
    return (
      <CardHeader
        title={author.name}
        subtitle={time}
        avatar={author.avatar_url}
      />
    );
  }
  return <CardHeader title="匿名" subtitle={time} />;
}

const CommentListItem = ({ comment }) => {
  const { author, content, ctime } = comment;
  return (
    <Card>
      {renderHeader(author, ctime)}
      <CardText>
        <ReadOnlyText content={content} />
      </CardText>
    </Card>
  );
};

CommentListItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentListItem;

