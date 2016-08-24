import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Avatar from 'material-ui/Avatar';
import style from './style.scss';

const UserInfo = ({ user }) => (
  <DocumentTitle title={user.name || ''}>
    <div className={style.userInfo}>
      <Avatar src={user.avatar_url} size={100} />
      <div className={style.username}>{user.name}</div>
    </div>
  </DocumentTitle>
);

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;

