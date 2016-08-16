import React from 'react';
import section from './Section';
import SlideContainer from './SlideContainer';
import Slide from './Slide';
import style from './style.scss';
import slideA from './images/slide-a.png';
import slideB from './images/slide-b.png';
import slideC from './images/slide-c.png';
import slideD from './images/slide-d.png';

const Section6 = () => (
  <div className={style.section6}>
    <div className={style.left}>
      <div className={style.precaution}>
        <p className={style.admit}>名額有限，先報名先錄取！</p>
        <ul>
          <li>報告前請詳細閱讀活動規章</li>
          <li>費用全免</li>
          <li>若有購買 T-shirt 者，活動「當天」現場付款</li>
        </ul>
        <div className={style.joinNow}>敬請關注</div>
        <div className={style.preparation}>
          <p>
            主辦單位不提供電腦給參加者，
            請自行攜帶筆電。
          </p>
          <p>
            活動當天提供電源插座
            並使用學校的無線網路
          </p>
        </div>
      </div>
    </div>
    <div className={style.right}>
      <div className={style.slideBox}>
        <SlideContainer>
          <Slide image={slideA} text="可以先偷跑" />
          <Slide image={slideB} text="定期舉辦" />
          <Slide image={slideC} text="不用一天做出成果" />
          <Slide image={slideD} text="不以比賽為導向" />
        </SlideContainer>
      </div>
    </div>
  </div>
);

export default section(Section6);

