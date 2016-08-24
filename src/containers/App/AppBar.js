import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MuiAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AppBar extends Component {
  static propTypes = {
    isLogin: PropTypes.bool,
    me: PropTypes.object,
    handleOpen: PropTypes.func,
  };
  renderLoginButton = () => {
    const { isLogin, me } = this.props;
    if (isLogin) {
      return (
        <FlatButton
          label={me.name}
          containerElement={<Link to="/u/me" />}
        />
      );
    }
    return (
      <FlatButton
        label="Login"
        containerElement={<Link to="/login" />}
      />
    );
  };
  render() {
    const { handleOpen } = this.props;
    return (
      <MuiAppBar
        title="清離子黑客松"
        iconElementRight={this.renderLoginButton()}
        onLeftIconButtonTouchTap={handleOpen}
      />
    );
  }
}

export default AppBar;

