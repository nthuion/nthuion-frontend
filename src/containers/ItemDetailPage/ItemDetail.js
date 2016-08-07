import React, { PropTypes } from 'react';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';
import { Card, CardText } from 'material-ui/Card';
import ItemInfo from '../ItemInfo';

const ItemDetail = ({ type, item }) => {
  const contentState = convertFromRaw(JSON.parse(item.content));
  const editorState = EditorState.createWithContent(contentState);
  return (
    <Card>
      <ItemInfo type={type} item={item} />
      <CardText>
        <Editor editorState={editorState} readOnly />
      </CardText>
    </Card>
  );
};

ItemDetail.propTypes = {
  type: PropTypes.oneOf(['issue', 'solution']).isRequired,
  item: PropTypes.object.isRequired,
};

export default ItemDetail;

