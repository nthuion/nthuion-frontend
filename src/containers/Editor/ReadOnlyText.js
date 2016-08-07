import React, { PropTypes } from 'react';
import {
  Editor,
  EditorState,
  convertFromRaw,
} from 'draft-js';

const ReadOnlyText = ({ content }) => {
  const contentState = convertFromRaw(JSON.parse(content));
  const editorState = EditorState.createWithContent(contentState);
  return (
    <Editor editorState={editorState} readOnly />
  );
};

ReadOnlyText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ReadOnlyText;

