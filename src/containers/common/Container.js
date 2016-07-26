import React, { PropTypes } from 'react';
import style from './styles/base.scss';

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

