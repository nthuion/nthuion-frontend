import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { convertToRaw } from 'draft-js';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextArea from '../Editor/TextArea';
import { editComment, sendComment } from './actions';

class CommentForm extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    isLogin: PropTypes.bool,
    id: PropTypes.number.isRequired,
    editorState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  handleChange = (editorState) => {
    this.props.dispatch(editComment(editorState));
  };
  handleSubmit = () => {
    const { type, id } = this.props;
    const contentState = this.props.editorState.getCurrentContent();
    if (contentState.getPlainText().trim() === '') {
      return;
    }
    const content = JSON.stringify(convertToRaw(contentState));
    this.props.dispatch(sendComment(type, id, content));
  };
  render() {
    const { isLogin, editorState } = this.props;
    if (!isLogin) {
      return (
        <CardText>
          <Link to="/login">登入</Link>
          後才能留言
        </CardText>
      );
    }
    return (
      <Card>
        <CardTitle title="留言" />
        <CardText>
          <TextArea
            editorState={editorState}
            onChange={this.handleChange}
          />
        </CardText>
        <CardActions>
          <FlatButton label="送出" onClick={this.handleSubmit} />
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: !!state.auth.apiToken,
  editorState: state.commentForm.editorState,
});

export default connect(mapStateToProps)(CommentForm);

