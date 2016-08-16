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
          <Slide
            image={slideA}
            title="可以先偷跑"
            text={`
            如果已經迫不急待想執行，或是正在進行的專案，
            歡迎帶著目前的成果來與大家交流！"
            `}
          />
          <Slide
            image={slideB}
            title="定期舉辦"
            text={`
            透過定期舉辦，更讓每個專案都能永續運作，
            將成果回饋到校園中的一草一木。
            `}
          />
          <Slide
            image={slideC}
            title="不用一天做出成果"
            text={`
            活動當天只是一個開始，做好可行的時程規劃，
            在課餘時間約出來小型黑客松一下。
            `}
          />
          <Slide
            image={slideD}
            title="不以比賽為導向"
            text={`
            除了減少競爭敵意，並讓交流加深加廣之外，
            也避免淪為追求名次而進行的表面功夫。
            `}
          />
        </SlideContainer>
      </div>
    </div>
  </div>
);

export default section(Section6);

