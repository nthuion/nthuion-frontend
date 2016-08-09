import React from 'react';
import Section from './Section';
import style from './style.scss';

const MainSection = () => (
  <Section>
    <div className={style.title}>清離子黑客松</div>
    <div className={style.ground}>
      <p>還在靠北校園中各種不方便的角落？</p>
      <p>何不自己來改造！</p>
    </div>
  </Section>
);

export default MainSection;

