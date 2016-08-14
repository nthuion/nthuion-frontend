import React from 'react';
import section from './Section';
import Ring from './Ring';
import ParallaxScene from './ParallaxScene';
import ParallaxItem from './ParallaxItem';
import style from './style.scss';
import headerLogo from './images/header-logo.png';
import headerPlanetUpper from './images/header-planet-upper.png';

const MainSection = () => (
  <div>
    <div className={style.logoContainer}>
      <img
        className={style.headerLogo}
        src={headerLogo}
        alt="header-logo"
      />
      <div className={style.title}>清離子黑客松</div>
    </div>
    <div className={style.mainSectionRing}>
      <ParallaxScene>
        <ParallaxItem depth={1.0}><Ring size="l" /></ParallaxItem>
        <ParallaxItem depth={0.8}><Ring size="m" /></ParallaxItem>
        <ParallaxItem depth={0.6}><Ring size="s" /></ParallaxItem>
      </ParallaxScene>
    </div>
    <img
      className={style.headerPlanetUpper}
      src={headerPlanetUpper}
      alt="header-planet-upper"
    />
    <div className={style.headerPlanetLower}>
      <div className={style.cowbei}>
        <p>還在靠北校園中各種不方便的角落？</p>
        <p>何不自己來改造！</p>
      </div>
      <div className={style.timeLocation}>
        <p>2016 / 9 / 28</p>
        <p>國立清華大學台達館</p>
      </div>
    </div>
  </div>
);

export default section(MainSection);

