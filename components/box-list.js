import React from "react";
import PropTypes from "prop-types";
import style from "../styles/box-list.scss";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onBoxIdChange(e.target.dataset.id * 1);
  }

  render() {
    const { data, boxId, currentCity } = this.props;
    const { cityMap } = data.main.boxArea;
    const { boxList } = cityMap[currentCity][0];

    const boxItems = boxList.map(item => {
      return (
        <div
          key={item.boxId}
          className={style.box}
          onClick={this.handleClick}
          data-id={item.boxId}
          data-current={boxId === item.boxId}
        >
          {item.boxname}
        </div>
      );
    });

    return <div className={style.list}>{boxItems}</div>;
  }
}

BoxList.propTypes = {
  data: PropTypes.object,
  boxId: PropTypes.number,
  currentCity: PropTypes.string,
};

export default BoxList;
