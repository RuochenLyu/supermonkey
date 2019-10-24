import React from "react";
import style from "../styles/mobile.scss";

const Mobile = () => {
  return (
    <div className={style.mobile}>
      <h2>超级猩猩·课程表</h2>
      <img src="/static/screenshot.png" loading="lazy" alt="超级猩猩健身" />
      <div>
        请用电脑访问 <b>super.kshift.me</b> 查看
        <br />
        手机请访问官方微信小程序
      </div>
    </div>
  );
};

export default Mobile;
