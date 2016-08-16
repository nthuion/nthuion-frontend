import React from 'react';
import section from './Section';
import ScheduleRow from './ScheduleRow';
import style from './style.scss';

const Section5 = () => (
  <div>
    <div className={style.scheduleContainer}>
      <div className={style.scheduleTable}>
        <ScheduleRow from="08:50" to="09:20" event="報到" />
        <ScheduleRow from="09:20" to="09:55" event="開場" />
        <ScheduleRow from="09:55" to="10:00" event="選課預排系統經驗分享" />
        <ScheduleRow from="10:00" to="10:45" event="3分鐘簡介提案" />
        <ScheduleRow from="10:45" to="11:00" event="三個關鍵字自我介紹" />
        <ScheduleRow from="11:00" to="12:00" event="分組媒合" />
        <ScheduleRow from="12:00" to="12:50" event="午餐、休息" />
        <ScheduleRow from="12:50" to="13:00" event="簡介下午流程" />
        <ScheduleRow from="13:00" to="17:00" event="Hackathon" />
        <ScheduleRow from="17:00" to="17:50" event="成果分享" />
        <ScheduleRow from="17:50" to="18:00" event="頒獎" />
      </div>
    </div>
    <div className={style.scheduleTitle}>活動流程</div>
    <div className={style.location}>
      <p>2016 / 9 / 28</p>
      <p>國立清華大學台達館</p>
      <p>參加對象: 清大在校生</p>
      <p>報名費全免</p>
    </div>
    <div className={style.joinTitle}>活動報名</div>
  </div>
);

export default section(Section5);

