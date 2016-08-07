import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import Section from '../common/Section';
import Container from '../common/Container';
import ContentEditor from './ContentEditor';
import { editContent, createItem } from './actions';

class CreateItemPage extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    editorState: PropTypes.object,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      is_anonymous: false,
      content: '',
    };
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
    const content = this.props.editorState.getCurrentContent().getPlainText();
    const item = {
      ...this.state,
      tags: this.state.tags.split(',').map((tag) => tag.trim()),
      content,
    };
    const { type } = this.props;
    if (type === 'solution') {
      item.is_anonymous = undefined;
    }
    this.props.dispatch(createItem(type, item));
  };
  render() {
    const { type, editorState } = this.props;
    const title = type === 'issue' ? '新增問題' : '新增提案';
    return (
      <DocumentTitle title={title}>
        <Section>
          <Container>
            <Card>
              <CardTitle title={title} />
              <CardText>
                <TextField
                  floatingLabelText="標題"
                  onChange={this.handleTitleChange}
                /><br />
                <TextField
                  floatingLabelText="分類標籤"
                  onChange={this.handleTagsChange}
                /><br />
                <Checkbox
                  label="匿名"
                  checked={this.state.is_anonymous}
                  onCheck={this.handleAnonymousChange}
                /><br />
                <ContentEditor
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

