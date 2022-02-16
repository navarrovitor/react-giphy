import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(event);
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
        placeholder="the office"
      />
    );
  }
}

export default SearchBar;
