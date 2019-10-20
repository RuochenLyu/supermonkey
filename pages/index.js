import React from "react";
import fetch from "isomorphic-unfetch";
import "../styles/reset.scss";
import "../styles/global.scss";
import style from "../styles/layout.scss";

import Loading from "../components/loading";
import Head from "../components/head";
import CityPicker from "../components/city-picker";
import BoxList from "../components/box-list";
import Schedule from "../components/schedule";
import Qrcode from "../components/qrcode";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoxIdChange = this.handleBoxIdChange.bind(this);
    this.handleCurrentCityChange = this.handleCurrentCityChange.bind(this);
    this.state = { loading: true };
  }

  handleBoxIdChange(boxId) {
    this.setState({ boxId });
    localStorage.setItem("sm/boxId", boxId);
  }

  handleCurrentCityChange(currentCity) {
    this.fetch(currentCity);
  }

  componentDidMount() {
    const currentCity = localStorage.getItem("sm/currentCity") || "北京市";
    this.fetch(currentCity);
  }

  async fetch(currentCity) {
    this.setState({ loading: true });
    const result = await fetch(
      `//raw.githubusercontent.com/RuochenLyu/supermonkey/master/static/${currentCity}.json`
    );
    const json = await result.json();

    let boxId = localStorage.getItem("sm/boxId") * 1;
    const { cityMap } = json.data.main.boxArea;
    const { boxList } = cityMap[currentCity][0];

    if (boxList.every(item => item.boxId !== boxId)) {
      boxId = boxList[0].boxId;
    }

    this.setState({
      loading: false,
      data: json.data,
      boxId,
      currentCity,
    });
    localStorage.setItem("sm/boxId", boxId);
    localStorage.setItem("sm/currentCity", currentCity);
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Head />
          <div className={style.main}>
            <Loading />
          </div>
          <Qrcode />
        </div>
      );
    }

    const { data, boxId, currentCity } = this.state;
    const { cityList } = data.main.boxArea;

    return (
      <div>
        <Qrcode />
        <Head />
        <div className={style.main}>
          <nav>
            <CityPicker
              cityList={cityList}
              currentCity={currentCity}
              onCurrentCityChange={this.handleCurrentCityChange}
            />
            <BoxList
              data={data}
              boxId={boxId}
              currentCity={currentCity}
              onBoxIdChange={this.handleBoxIdChange}
            />
          </nav>
          <Schedule data={data} boxId={boxId} />
        </div>
      </div>
    );
  }
}

export default Index;
