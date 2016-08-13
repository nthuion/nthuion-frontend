import React from 'react';
import section from './Section';
import Ring from './Ring';
import ParallaxScene from './ParallaxScene';
import ParallaxItem from './ParallaxItem';
import style from './style.scss';

const Section3 = () => (
  <div className={style.section3}>
    <div className={style.whatIsHackathon}>
      <h3>什麼是黑客松</h3>
      <p>QQQ</p>
    </div>
    <ParallaxScene>
      <ParallaxItem depth={0.6}><Ring size="l" /></ParallaxItem>
      <ParallaxItem depth={0.4}><Ring size="m" /></ParallaxItem>
      <ParallaxItem depth={0.2}><Ring size="s" /></ParallaxItem>
    </ParallaxScene>
    <div className={style.photoContainer}>
      <div className={style.photoA} />
      <div className={style.photoB} />
      <div className={style.photoC} />
    </div>
  </div>
);

export default section(Section3);

