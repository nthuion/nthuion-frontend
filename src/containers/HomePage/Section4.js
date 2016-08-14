import React from 'react';
import section from './Section';
import style from './style.scss';
import lineA from './images/line-a.png';

const Section4 = () => (
  <div>
    <img className={style.lineA} src={lineA} role="presentation" />
    <div className={style.changeSchool}>
      <p>
        面對校園中不方便、不滿意的角落，
        我們該如何貫徹校訓的精神？
        視而不見、默不吭聲，抑或上靠清發文？
      </p>
      <p>
        無論是擦身而過的校巴、不美觀的校園網頁、低落的建築館舍品質，
        校園中的許多問題，正等待身為清華一分子的我們「自強不息」，共同關注、解決。
      </p>
      <p>
        你也對校園生活充滿各種想法嗎？<br />
        讓我們一起動手改變吧！
      </p>
    </div>
    <div className={style.beforeHackathon}>
      <h4>活動前</h4>
      <p>
        如果你遇到困擾，可以到平台上「提問」，
        描述在校園中遇到的問題。
        如果你對問題有解決的想法，則可以「提案」，
        說明想法、做法與需要的人才。
      </p>
    </div>
    <div className={style.hackathonMorning}>
      <h4>當天媒合</h4>
      <p>
        活動當天早上，將進行提案簡介，
        同時協助大家找尋各個專案需要的人才。
        學生會同時也會在場，協助提共校方的溝通管與各種支援。
      </p>
    </div>
    <div className={style.hackathonAfternoon}>
      <h4>技術支持</h4>
      <p>
        活動當天，也將提供協同作業的工具教學，
        ，讓團隊協作更具效率。
        在實作過程中，將有無限供應的餐點與飲料。
        結束前再由每個團隊進行成果發表。
      </p>
    </div>
  </div>
);

export default section(Section4);

