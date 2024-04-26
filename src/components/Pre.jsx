import React from "react";
import Disc from "../Assets/disc.svg";
function Pre(props) {
  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      className='d-flex justify-content-center align-items-center'
    >
      {props.load && <img src={Disc} className='spin-animation' />}
    </div>
  );
}

export default Pre;
