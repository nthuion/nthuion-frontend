import React, { PropTypes } from 'react';
import ItemDetailPage from '../ItemDetailPage';

const IssueDetailPage = ({ params: { id } }) => (
  <ItemDetailPage id={id} type="issue" />
);

IssueDetailPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default IssueDetailPage;

