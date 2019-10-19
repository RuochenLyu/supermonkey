import React from "react";
import style from "../styles/loading.scss";

const Loading = () => {
  return (
    <div className={style.spinner}>
      <div className={style.bounce1}></div>
      <div className={style.bounce2}></div>
      <div></div>
    </div>
  );
};

export default Loading;
