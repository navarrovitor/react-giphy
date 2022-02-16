import React, { Component } from "react";
import giphyApi from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

const GIPHY_API_KEY = "ySfksITbG97KXhYU61k4GxKgUkaZhQ2n";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "jp7jSyjNNz2ansuOS8",
      gifs: [],
    };

    this.search("the office");
    this.select = this.select.bind(this);
  }

  search = (query) => {
    giphyApi(GIPHY_API_KEY).search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (err, res) => {
        this.setState({
          gifs: res.data,
        });
      }
    );
  };

  select(id) {
    this.setState({
      selectedGifId: id,
    });
    console.log(this.selectedGifId);
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
