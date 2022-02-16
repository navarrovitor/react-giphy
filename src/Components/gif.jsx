import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.select) {
      this.props.select(this.props.id);
    }
  };

  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} alt="" className="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
