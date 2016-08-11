import React, { PropTypes } from 'react';
import cx from 'classnames';
import style from './style.scss';

function Section(Component) {
  const SectionWrapper = ({ next, previous }) => (
    <div
      className={cx(style.sectionWrapper, {
        [style.next]: next,
        [style.previous]: previous,
      })}
    >
      <div className={style.section}>
        <Component />
      </div>
    </div>
  );
  SectionWrapper.propTypes = {
    next: PropTypes.bool,
    previous: PropTypes.bool,
  };
  return SectionWrapper;
}

export default Section;

