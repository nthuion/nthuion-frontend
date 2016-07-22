import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './style.scss';

const loginLink = (
  <FlatButton
    label="Login"
    containerElement={<Link to="/login" />}
  />
);

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="NTHU ION"
        iconElementRight={loginLink}
      />
      {children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;

