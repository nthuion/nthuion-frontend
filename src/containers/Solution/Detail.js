import React, { PropTypes } from 'react';
import ItemDetailPage from '../ItemDetailPage';

const SolutionDetailPage = ({ params: { id } }) => (
  <ItemDetailPage id={id} type="solution" />
);

SolutionDetailPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default SolutionDetailPage;

