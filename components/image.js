import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      alt: props.alt,
      className: props.className,
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    this.setState({ src: "/static/touch-icon.png" });
  }

  render() {
    const { src, alt, className } = this.state;
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={this.handleError}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
