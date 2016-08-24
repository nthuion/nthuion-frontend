import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserInfoPage from './UserInfoPage';

const Me = ({ me }) => (
  <UserInfoPage user={me} />
);

Me.propTypes = {
  me: PropTypes.me,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  me: state.auth.me,
});

export default connect(mapStateToProps)(Me);

