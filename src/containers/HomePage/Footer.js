import React from 'react';
import section from './Section';
import style from './style.scss';

const Footer = () => (
  <div>
    <div className={style.footer}>
      <div className={style.organizer}>
        <p>// 主辦單位 //</p>
        <p>清離子</p>
        <p>Email</p>
        <p>
          <a href="mailto:nthuion@gmail.com">
            nthuion@gmail.com
          </a>
        </p>
        <p>粉絲專頁</p>
        <p>
          <a
            target="_blank"
            href="https://www.facebook.com/nthuion"
          >
            https://www.facebook.com/nthuion
          </a>
        </p>
      </div>
      <div className={style.coOrganizer}>
        <div>
          <p>// 協辦單位 //</p>
          <p>工業技術研究院</p>
          <p>開源軟體實驗室</p>
          <p>國立清華大學 資訊工程學系</p>
          <p>教育部資通訊軟體創新人才推升計畫</p>
          <p>國立清華大學 學生會</p>
        </div>
      </div>
    </div>
  </div>
);

export default section(Footer);

