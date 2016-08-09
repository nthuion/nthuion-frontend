import React from 'react';
import Section from './Section';
import style from './style.scss';

const Footer = () => (
  <Section>
    <div className={style.footer}>
      <div className={style.organizer}>
        <p>// 主辦單位 //</p>
        <p>清離子</p>
      </div>
      <div className={style.coOrganizer}>
        <div>
          <p>// 協辦單位 //</p>
          <p>工業技術研究院</p>
          <p>開源軟體實驗室</p>
          <p>國立清華大學 學生會</p>
        </div>
        <div>
          <p>// 指導單位 //</p>
          <p>國立清華大學</p>
          <p>國立清華大學 資程工程學系</p>
        </div>
      </div>
    </div>
  </Section>
);

export default Footer;

