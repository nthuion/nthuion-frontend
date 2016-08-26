import React from 'react';
import section from './Section';
import Ring from './Ring';
import ParallaxScene from './ParallaxScene';
import ParallaxItem from './ParallaxItem';
import style from './style.scss';

const Section3 = () => (
  <div className={style.section3}>
    <div className={style.whatIsHackathon}>
      <p>
        黑客松 (Hackathon) 堪稱近年來最熱門的程式設計活動。
        在黑客松裡，程式設計師與其他相關的人員相聚在一起。
        無論是設計師、行銷、專案經理，彼此緊密合作進行各種開發專案。
      </p>
      <p>
        黑客松的核心信念在於「合作」，讓想法互相匯流碰鐘，
        進行跨領域整合，激發更多活力與創意。
        聚集一群有著共同目標的人，用自己的方式發揮各自的專長，
        實踐心中的理想，並藉此希望能讓個人或群體可以更好，
        發揮積沙成塔的無窮力量。天馬行空，任意馳騁。
      </p>
      <p>來到清離子黑客松，開展你對清華的各種想像！</p>
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

