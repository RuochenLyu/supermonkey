import React from "react";
import style from "../styles/qrcode.scss";

const Qrcode = () => (
  <div className={style.qrcode}>
    <img src="/static/qrcode.png" alt="超级猩猩健身" />
    <div>
      手机请访问「超级猩猩」微信小程序
      <br />
      查看课程安排
    </div>
  </div>
);

export default Qrcode;
