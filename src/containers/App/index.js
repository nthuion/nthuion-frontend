import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';
import Drawer from './Drawer';
import FlatButton from 'material-ui/FlatButton';
import { fetchMe } from '../Auth/actions';
import './style.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    isLogin: PropTypes.bool,
    me: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    const { me } = this.props;
    if (!me) {
      this.props.dispatch(fetchMe());
    }
  }
  push = (path) => {
    this.props.dispatch(push(path));
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (open) => {
    this.setState({ open });
  };
  handleIssueLink = () => {
    this.props.dispatch(push('/i'));
    this.handleClose();
  };
  handleSolutionLink = () => {
    this.props.dispatch(push('/s'));
    this.handleClose();
  };
  renderLoginButton = () => {
    if (this.props.isLogin) {
      return null;
    }
    return (
      <FlatButton
        label="Login"
        containerElement={<Link to="/login" />}
      />
    );
  };
  renderAppBar = () => (
    <AppBar
      title="清離子黑客松"
      iconElementRight={this.renderLoginButton()}
      onLeftIconButtonTouchTap={this.handleOpen}
    />
  );
  render() {
    const { children, isLogin, location } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar isLogin={isLogin} handleOpen={this.handleOpen} />
          {children}
          <Drawer
            open={this.state.open}
            location={location}
            handleChange={this.handleChange}
            handleIssueLink={this.handleIssueLink}
            handleSolutionLink={this.handleSolutionLink}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: !!state.auth.apiToken,
  me: !!state.auth.me,
});

export default connect(mapStateToProps)(App);

