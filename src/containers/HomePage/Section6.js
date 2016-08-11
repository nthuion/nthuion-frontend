import React from 'react';
import section from './Section';
import style from './style.scss';

const Section6 = () => (
  <div>
    <div className={style.precaution}>
      <p>名額有限</p>
      <ul>
        <li>報告前請詳細閱讀活動規章</li>
        <li>費用全免</li>
        <li>若有購買 T-shirt 者，活動「當天」現場付款</li>
      </ul>
      <div className={style.joinNow}>馬上報名→</div>
      <div className={style.preparation}>
        <p>主辦單位不提供電腦給參加者，請自行攜帶筆電。</p>
        <p>活動當天提供電源插和無線網路</p>
      </div>
    </div>
  </div>
);

export default section(Section6);

