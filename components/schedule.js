import React from "react";
import PropTypes from "prop-types";
import format from "../utils/format";
import isToday from "../utils/isToday";

import Course from "./course";
import style from "../styles/schedule.scss";

const Schedule = props => {
  const { data, boxId } = props;
  const { scheduleList } = data.main;

  const listItems = scheduleList.map(item => {
    const list = item.boxClassSchedulesList.find(x => x.boxId === boxId);
    let courses = list.classScheduleList.map(id => {
      return <Course key={id} data={data} course={data.scheduleSmallMap[id]} />;
    });

    if (list.classScheduleListEmptyReason) {
      courses = (
        <div className={style.init}>
          猩猩排课中
          <br />
          每周五 22:30 发布
        </div>
      );
    }

    const today = isToday(item.date) ? (
      <span className={style.today}>今天</span>
    ) : (
      <span className={style.desc}>{format(item.date, "E")}</span>
    );

    return (
      <div key={item.date} className={style.list}>
        <div className={style.header}>
          <h2>{format(item.date)}</h2>
          {today}
        </div>
        <div>{courses}</div>
      </div>
    );
  });

  return (
    <main className={style.main}>
      <header className={style["main-header"]} />
      {listItems}
    </main>
  );
};

Schedule.propTypes = {
  data: PropTypes.object,
  boxId: PropTypes.number,
};

export default Schedule;
