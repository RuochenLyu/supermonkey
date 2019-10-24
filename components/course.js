import React from "react";
import PropTypes from "prop-types";
import format from "../utils/format";

import Image from "./image";
import style from "../styles/course.scss";

const BookingStatus = {
  0: "预约",
  1: "紧张",
  2: "满员",
  3: "结束",
};
class Course extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { classId } = this.props.course;
    this.props.onCourseClick(classId);
  }

  render() {
    const { data, course } = this.props;
    const { classinfoSmallMap, trainerSmallMap } = data;
    const classInfo = classinfoSmallMap[course.classId];
    const trainer = trainerSmallMap[course.trainerUserId];
    const status = data.main.priceMap[course.scheduleId].bookingCountStatus;

    return (
      <div className={style.course} onClick={this.handleClick}>
        <div className={style.header}>
          <span className={style.time}>
            {format(course.startTime, "HH:mm", true)}‐
            {format(course.endTime, "HH:mm", true)}
          </span>
          <span className={style.price} data-cheap={course.price < 1000}>
            ¥{course.price / 100}
          </span>
        </div>
        <h4 className={style.title}>{classInfo.className}</h4>
        <div className={style.info}>
          <Image
            className={style.avatar}
            src={trainer.face}
            alt={trainer.trainerStageName}
          />
          <div className={style["info-main"]}>
            <div>{trainer.trainerStageName}</div>
            <div className={style.tags}>
              {classInfo.tag.slice(0, 3).join(" · ")}
            </div>
          </div>
          <div className={style.status} data-status={status}>
            {BookingStatus[status]}
          </div>
        </div>
      </div>
    );
  }
}

Course.propTypes = {
  data: PropTypes.object,
  course: PropTypes.object,
};

export default Course;
