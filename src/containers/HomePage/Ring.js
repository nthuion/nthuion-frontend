import React, { PropTypes } from 'react';
import style from './style.scss';
import largeRing from './images/ring-big.png';
import mediumRing from './images/ring-medium.png';
import smallRing from './images/ring-small.png';

const className = {
  l: style.largeRing,
  m: style.mediumRing,
  s: style.smallRing,
};

const image = {
  l: largeRing,
  m: mediumRing,
  s: smallRing,
};

const Ring = ({ size = 'm' }) => (
  <img
    className={className[size]}
    src={image[size]}
    role="presentation"
  />
);

Ring.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Ring;

