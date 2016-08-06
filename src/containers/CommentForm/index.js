import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { sendComment } from './actions';

class CommentForm extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['issue', 'solution']).isRequired,
    isLogin: PropTypes.bool,
    id: PropTypes.number.isRequired,
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
    const { type, id } = this.props;
    const { content } = this.state;
    if (content.trim() === '') {
      return;
    }
    this.props.dispatch(sendComment(type, id, content));
    this.setState({ content: '' });
  };
  render() {
    if (!this.props.isLogin) {
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
          <TextField
            name="comment"
            value={this.state.content}
            multiLine
            rows={2}
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
});

export default connect(mapStateToProps)(CommentForm);

