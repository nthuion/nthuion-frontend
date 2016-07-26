import React, { PropTypes } from 'react';
import style from './styles/base.scss';

const Section = ({ children }) => (
  <div className={style.section}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

