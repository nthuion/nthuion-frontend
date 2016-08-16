import React, { PropTypes } from 'react';
import style from './style.scss';

const Slide = ({ delta, image, title, text }) => (
  <div
    className={style.slide}
    style={{
      transform: `translateX(${100 * delta}%)`,
    }}
  >
    <img src={image} role="presentation" />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

Slide.propTypes = {
  delta: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Slide;

