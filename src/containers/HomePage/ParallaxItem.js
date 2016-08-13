import React, { PropTypes } from 'react';

const ParallaxItem = ({ depth, children }) => (
  <div className="layer" data-depth={depth}>
    {children}
  </div>
);

ParallaxItem.propTypes = {
  depth: PropTypes.number,
  children: PropTypes.node,
};

export default ParallaxItem;

