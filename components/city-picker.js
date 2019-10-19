import React from "react";
import PropTypes from "prop-types";

import style from "../styles/city-picker.scss";

class CityPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opend: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onCurrentCityChange(e.target.dataset.id);
    this.setState({ opend: false });
  }

  toggleList() {
    this.setState(prevState => ({
      opend: !prevState.opend,
    }));
  }

  render() {
    const { cityList, currentCity } = this.props;

    const cityItems = cityList.map(item => {
      return (
        <div
          key={item}
          className={style.city}
          onClick={this.handleClick}
          data-id={item}
          data-current={currentCity === item}
        >
          {item}
        </div>
      );
    });

    return (
      <div className={style.picker}>
        <div
          className={style.current}
          onClick={() => this.toggleList()}
          data-opend={this.state.opend}
        >
          <img src="/static/touch-icon.png" alt="超级猩猩·课程表" />
          <span>{currentCity}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div className={style.dropdown} data-opend={this.state.opend}>
          {cityItems}
        </div>
      </div>
    );
  }
}

CityPicker.propTypes = {
  cityList: PropTypes.array,
  currentCity: PropTypes.string,
};

export default CityPicker;
