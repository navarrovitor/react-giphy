/* eslint-disable react/function-component-definition */
import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif) => (
        <Gif id={gif.id} key={gif.id} select={props.select} />
      ))}
    </div>
  );
};

export default GifList;
