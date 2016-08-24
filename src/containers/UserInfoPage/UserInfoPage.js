import React, { PropTypes } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import UserInfo from './UserInfo';

const UserInfoPage = ({ user }) => (
  <Container>
    <Section>
      <UserInfo user={user} />
    </Section>
  </Container>
);

UserInfoPage.propTypes = {
  user: PropTypes.object,
};

export default UserInfoPage;

