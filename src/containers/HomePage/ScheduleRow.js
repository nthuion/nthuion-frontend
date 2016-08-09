import React, { PropTypes } from 'react';
import style from './style.scss';

const ScheduleRow = ({ from, to, event }) => (
  <div className={style.scheduleRow}>
    <div className={style.scheduleTime}>
      {`${from}-${to}`}
    </div>
    <div className={style.scheduleEvent}>{event}</div>
  </div>
);

ScheduleRow.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  event: PropTypes.string,
};

export default ScheduleRow;

