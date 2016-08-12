import React from 'react';
import section from './Section';
import style from './style.scss';
import lineA from './images/line-a.png';

const Section4 = () => (
  <div>
    <img className={style.lineA} src={lineA} role="presentation" />
    <div className={style.beforeHackathon}>
      <h4>活動日之前</h4>
      <p>
        到平台上「提問」，描述在校園中遇到的困擾；
        並讓想改變現狀的你「提案」，說明想法、做法與需要的人才。
      </p>
    </div>
    <div className={style.hackathonMorning}>
      <h4>活動日早上</h4>
      <p>
        提案進行簡介，媒合人才;
        熟悉相關議題的學生會成員與輔導也會在場與大家討論激盪想法，
        若需要校方資料或其他資源，
        皆可立即與學生會成員協調。
      </p>
    </div>
    <div className={style.hackathonAfternoon}>
      <h4>活動日下午</h4>
      <p>
        我們有團隊開發的工具教學，讓團隊協作更具效率；
        在實作過程中，提供無限供應的餐點與飲料；
        並在活動結束前讓每個團隊三分鐘成果發表。
      </p>
    </div>
  </div>
);

export default section(Section4);

