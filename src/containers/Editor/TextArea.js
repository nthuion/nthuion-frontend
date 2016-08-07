import React, { Component, PropTypes } from 'react';
import { Editor } from 'draft-js';
import cx from 'classnames';
import style from './style.scss';

class TextArea extends Component {
  static propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  focus = () => {
    this.refs.editor.focus();
  };
  handleFocus = () => {
    this.setState({ focus: true });
  };
  handleBlur = () => {
    this.setState({ focus: false });
  };
  render() {
    const { editorState, onChange } = this.props;
    return (
      <div
        className={cx(style.textarea, {
          [style.focus]: this.state.focus,
        })}
        onClick={this.focus}
      >
        <Editor
          ref="editor"
          editorState={editorState}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default TextArea;

