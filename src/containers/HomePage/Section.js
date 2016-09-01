import React, { PropTypes } from 'react';
import style from './style.scss';

function Section(Component) {
  const SectionWrapper = ({ delta }) => (
    <div
      className={style.sectionWrapper}
      style={{
        transform: `translateY(${100 * delta}%)`,
      }}
    >
      <div className={style.section}>
        <Component active={delta === 0} />
      </div>
    </div>
  );
  SectionWrapper.propTypes = {
    delta: PropTypes.number,
  };
  return SectionWrapper;
}

export default Section;

