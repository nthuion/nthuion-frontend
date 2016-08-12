import React from 'react';
import section from './Section';
import Ring from './Ring';
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
      <Ring size="l" />
      <Ring size="m" />
      <Ring size="s" />
    </div>
    <img
      className={style.headerPlanetUpper}
      src={headerPlanetUpper}
      alt="header-planet-upper"
    />
    <div className={style.headerPlanetLower}>
      <p>還在靠北校園中各種不方便的角落？</p>
      <p>何不自己來改造！</p>
    </div>
  </div>
);

export default section(MainSection);

