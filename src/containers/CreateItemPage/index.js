import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { convertToRaw } from 'draft-js';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import Section from '../common/Section';
import Container from '../common/Container';
import TextArea from '../Editor/TextArea';
import { editContent, createItem, editItem } from './actions';
import style from './style.scss';

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
    const { title, tags, is_anonymous } = props.item;
    if (isEdit) {
      this.state = {
        title,
        tags: tags.join(', '),
        is_anonymous,
      };
    } else {
      this.state = {
        title: '',
        tags: '',
        is_anonymous: false,
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
    const { type } = this.props;
    this.props.dispatch(editContent(type, editorState));
  };
  handleSubmit = () => {
    const content = this.props.editorState.getCurrentContent();
    const item = {
      ...this.state,
      tags: this.state.tags.split(',').map((tag) => tag.trim()),
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
    const { type, isEdit, editorState } = this.props;
    const prefix = isEdit ? '編輯' : '新增';
    const title = type === 'issue' ? `${prefix}問題` : `${prefix}提案`;
    return (
      <DocumentTitle title={title}>
        <Section>
          <Container>
            <Card>
              <CardTitle title={title} />
              <CardText>
                <TextField
                  floatingLabelText="標題"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                /><br />
                <TextField
                  floatingLabelText="分類標籤"
                  value={this.state.tags}
                  onChange={this.handleTagsChange}
                /><br />
                <Checkbox
                  label="匿名"
                  checked={this.state.is_anonymous}
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

