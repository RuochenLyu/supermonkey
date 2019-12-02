import React from "react";
import ReactGA from "react-ga";
import AV from "leancloud-storage";

import "../styles/reset.scss";
import "../styles/global.scss";
import style from "../styles/layout.scss";

import Loading from "../components/loading";
import Head from "../components/head";
import CityPicker from "../components/city-picker";
import BoxList from "../components/box-list";
import Schedule from "../components/schedule";
import Mobile from "../components/mobile";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoxIdChange = this.handleBoxIdChange.bind(this);
    this.handleCurrentCityChange = this.handleCurrentCityChange.bind(this);
    this.state = { loading: true };
  }

  handleBoxIdChange(boxId) {
    this.setState({ boxId });
    localStorage.setItem("boxId", boxId);
  }

  handleCurrentCityChange(currentCity) {
    this.fetch(currentCity);
  }

  componentDidMount() {
    ReactGA.initialize("UA-150431358-1");
    ReactGA.pageview(location.pathname);
    AV.init({
      appId: "omStNgknnXtGwJ5mV6wyIthz-gzGzoHsz",
      appKey: "x6pStM61pw2sjQfUWDJF7Yz6",
      serverURLs: "https://api-super.owcat.com"
    });

    const currentCity = localStorage.getItem("currentCity") || "北京市";
    this.fetch(currentCity);
  }

  async fetch(currentCity) {
    this.setState({ loading: true });
    console.log(currentCity);

    new AV.Query("Course")
      .equalTo("city", currentCity)
      .find()
      .then(data => {
        if (data.length === 0) return;
        data = data[0].attributes.data;
        console.log(data);

        let boxId = localStorage.getItem("boxId") * 1;
        const { cityMap } = data.main.boxArea;
        const { boxList } = cityMap[currentCity][0];

        if (boxList.every(item => item.boxId !== boxId)) {
          boxId = boxList[0].boxId;
        }

        this.setState({
          loading: false,
          data,
          boxId,
          currentCity
        });
        localStorage.setItem("boxId", boxId);
        localStorage.setItem("currentCity", currentCity);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Head />
          <div className={style.main}>
            <Loading />
          </div>
          <Mobile />
        </div>
      );
    }

    const { data, boxId, currentCity } = this.state;
    const { cityList } = data.main.boxArea;

    return (
      <div>
        <Head />
        <Mobile />
        <div className={style.main}>
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
          <Schedule data={data} boxId={boxId} />
        </div>
      </div>
    );
  }
}

export default Index;
