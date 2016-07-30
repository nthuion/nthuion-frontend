import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { sendComment } from './actions';

class CommentForm extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    qid: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = () => {
    const { type, qid } = this.props;
    const { content } = this.state;
    if (content.trim() === '') {
      return;
    }
    this.props.dispatch(sendComment(type, qid, content));
    this.setState({ content: '' });
  };
  render() {
    return (
      <Card>
        <CardTitle title="留言" />
        <CardText>
          <TextField
            name="comment"
            value={this.state.content}
            multiLine
            rows={1}
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

export default connect()(CommentForm);

