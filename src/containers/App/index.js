import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import './style.scss';

const loginLink = (
  <FlatButton
    label="Login"
    containerElement={<Link to="/login" />}
  />
);

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    isLogin: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (open) => {
    this.setState({ open });
  };
  renderAppBar = () => {
    if (this.props.isLogin) {
      return <AppBar title="NTHU ION" />;
    }
    return (
      <AppBar
        title="NTHU ION"
        iconElementRight={loginLink}
        onLeftIconButtonTouchTap={this.handleOpen}
      />
    );
  };
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          {this.renderAppBar()}
          {children}
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestionChange={this.handleChange}
          >
            <MenuItem onTouchTap={this.handleClose}>
              <Link to="/i">Issues</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to="/s">Solutions</Link>
            </MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: !!state.auth.apiToken,
});

export default connect(mapStateToProps)(App);

