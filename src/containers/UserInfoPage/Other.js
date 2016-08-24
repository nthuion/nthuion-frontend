import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserInfoPage from './UserInfoPage';
import { fetchUser } from './actions';

class Other extends Component {
  static propTypes = {
    params: PropTypes.object,
    userInfo: PropTypes.object,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { id } = this.props.params;
    this.props.dispatch(fetchUser(id));
  }
  render() {
    const { params: { id }, userInfo } = this.props;
    const user = userInfo[id] || {};
    return (
      <UserInfoPage user={user} />
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(Other);

