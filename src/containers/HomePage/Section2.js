import React from 'react';
import section from './Section';
import style from './style.scss';

const Section2 = () => (
  <div>
    <div className={style.whatIsNthuion}>
      <p>清離子黑客松希望能改變校園不滿的現狀。</p>
      <p>聚集校園中的各路好漢，也集合各種創意無限的好點子。</p>
      <p>運用大家所學的能力，動手解決你我在清大校園中遇到的種種問題！</p>
    </div>
  </div>
);

export default section(Section2);

