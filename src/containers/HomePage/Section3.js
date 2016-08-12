import React from 'react';
import section from './Section';
import Ring from './Ring';
import style from './style.scss';

const Section3 = () => (
  <div>
    <div className={style.whatIsHackathon}>
      <h3>什麼是黑客松</h3>
      <p>QQQ</p>
    </div>
    <div className={style.photoContainer}>
      <Ring size="l" />
      <Ring size="m" />
      <Ring size="s" />
      <div className={style.photoA} />
      <div className={style.photoB} />
      <div className={style.photoC} />
    </div>
  </div>
);

export default section(Section3);

