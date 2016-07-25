import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MdCreate from 'react-icons/lib/md/create';
import style from './style.scss';

const loginLink = (
  <FlatButton
    label="Login"
    containerElement={<Link to="/login" />}
  />
);

function renderAppBar(isLogin) {
  if (isLogin) {
    return <AppBar title="NTHU ION" />;
  }
  return (
    <AppBar
      title="NTHU ION"
      iconElementRight={loginLink}
    />
  );
}

const App = ({ children, isLogin }) => (
  <MuiThemeProvider>
    <div>
      {renderAppBar(isLogin)}
      {children}
      <Link to="/q/create">
        <FloatingActionButton className={style.createButton}>
          <MdCreate />
        </FloatingActionButton>
      </Link>
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
  isLogin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLogin: !!state.auth.apiToken,
});

export default connect(mapStateToProps)(App);

