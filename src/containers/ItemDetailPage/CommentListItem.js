import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { blue300 } from 'material-ui/styles/colors';
import TextArea from '../Editor/TextArea';
import ReadOnlyText from '../Editor/ReadOnlyText';
import { sendEditComment } from '../CommentForm/actions';
import style from './style.scss';

class CommentListItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      editorState: EditorState.createEmpty(),
    };
  }
  handleEdit = () => {
    const { content } = this.props.comment;
    const contentState = convertFromRaw(JSON.parse(content));
    const editorState = EditorState.createWithContent(contentState);
    this.setState({
      isEdit: true,
      editorState,
    });
  };
  handleCancel = () => {
    this.setState({ isEdit: false });
  };
  handleChange = (editorState) => {
    this.setState({ editorState });
  };
  handleSubmit = () => {
    const { comment } = this.props;
    const contentState = this.state.editorState.getCurrentContent();
    if (contentState.getPlainText().trim() === '') {
      return;
    }
    const content = JSON.stringify(convertToRaw(contentState));
    this.props.dispatch(sendEditComment(comment, content));
    this.setState({ isEdit: false });
  };
  renderHeader = () => {
    const { author, ctime } = this.props.comment;
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
  };
  renderEdit = () => {
    const { me, comment: { author } } = this.props;
    if (me.id !== author.id) {
      return null;
    }
    return (
      <div
        className={style.edit}
        onClick={this.handleEdit}
      >
        編輯
      </div>
    );
  };
  renderContent = () => {
    const { content } = this.props.comment;
    const { isEdit, editorState } = this.state;
    if (isEdit) {
      return (
        <TextArea
          editorState={editorState}
          onChange={this.handleChange}
        />
      );
    }
    return <ReadOnlyText content={content} />;
  };
  renderEditButton = () => {
    const { isEdit } = this.state;
    if (!isEdit) {
      return null;
    }
    return (
      <CardActions>
        <FlatButton label="取消" onClick={this.handleCancel} />
        <FlatButton
          label="送出"
          onClick={this.handleSubmit}
          style={{
            backgroundColor: blue300,
            color: 'white',
          }}
        />
      </CardActions>
    );
  };
  render() {
    return (
      <Card style={{ position: 'relative' }}>
        {this.renderHeader()}
        {this.renderEdit()}
        <CardText>{this.renderContent()}</CardText>
        {this.renderEditButton()}
      </Card>
    );
  }
}

export default connect()(CommentListItem);

