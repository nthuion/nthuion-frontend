import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import Section from '../common/Section';
import Container from '../common/Container';
import TextArea from '../Editor/TextArea';
import { createItem, editItem } from './actions';
import style from './style.scss';

/* eslint-disable camelcase */

class CreateItemPage extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    isEdit: PropTypes.bool,
    item: PropTypes.bool,
    editorState: PropTypes.object,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    const { isEdit } = props;
    const { title, tags, is_anonymous, content } = props.item;
    if (isEdit) {
      const contentState = convertFromRaw(JSON.parse(content));
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        title,
        tags: tags.join(', '),
        is_anonymous,
        editorState,
      };
    } else {
      this.state = {
        title: '',
        tags: '',
        is_anonymous: false,
        editorState: EditorState.createEmpty(),
      };
    }
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleTagsChange = (e) => {
    this.setState({ tags: e.target.value });
  };
  handleAnonymousChange = (e, isChecked) => {
    this.setState({ is_anonymous: isChecked });
  };
  handleContentChange = (editorState) => {
    this.setState({ editorState });
  };
  handleSubmit = () => {
    const { title, tags, is_anonymous, editorState } = this.state;
    const content = editorState.getCurrentContent();
    const item = {
      title,
      tags: tags.split(',').map((tag) => tag.trim()),
      is_anonymous,
      content: JSON.stringify(convertToRaw(content)),
    };
    const { type, isEdit, item: { id } } = this.props;
    if (type === 'solution') {
      item.is_anonymous = undefined;
    }
    if (isEdit) {
      this.props.dispatch(editItem(type, id, item));
    } else {
      this.props.dispatch(createItem(type, item));
    }
  };
  render() {
    const { type, isEdit } = this.props;
    const { title, tags, is_anonymous, editorState } = this.state;
    const prefix = isEdit ? '編輯' : '新增';
    const documentTitle = type === 'issue' ? `${prefix}問題` : `${prefix}提案`;
    return (
      <DocumentTitle title={documentTitle}>
        <Section>
          <Container>
            <Card>
              <CardTitle title={documentTitle} />
              <CardText>
                <TextField
                  floatingLabelText="標題"
                  value={title}
                  onChange={this.handleTitleChange}
                /><br />
                <TextField
                  floatingLabelText="分類標籤"
                  value={tags}
                  onChange={this.handleTagsChange}
                /><br />
                <Checkbox
                  label="匿名"
                  checked={is_anonymous}
                  onCheck={this.handleAnonymousChange}
                /><br />
                <div className={style.contentLabel}>內容</div>
                <TextArea
                  editorState={editorState}
                  onChange={this.handleContentChange}
                />
              </CardText>
              <CardActions>
                <FlatButton label="送出" onClick={this.handleSubmit} />
              </CardActions>
            </Card>
          </Container>
        </Section>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state) => ({
  editorState: state.createItem.editorState,
});

export default connect(mapStateToProps)(CreateItemPage);

