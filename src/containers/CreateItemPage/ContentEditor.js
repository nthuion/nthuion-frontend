import React, { Component, PropTypes } from 'react';
import { Editor as DraftEditor } from 'draft-js';
import cx from 'classnames';
import style from './style.scss';

class Editor extends Component {
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
    const { editorState } = this.props;
    return (
      <div>
        <div className={style.contentEditorLabel}>內容</div>
        <div
          className={cx(style.contentEditor, {
            [style.focus]: this.state.focus,
          })}
          onClick={this.focus}
        >
          <DraftEditor
            ref="editor"
            editorState={editorState}
            onChange={this.props.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </div>
    );
  }
}

export default Editor;

