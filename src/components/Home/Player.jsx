import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Player = ({ className, playerHide, updatePlayerHide }) => {
  return (
    <div
      className={`${className} d-flex flex-column`}
      style={{ width: "50%", margin: "auto" }}
    >
      {!playerHide && (
        <RxCrossCircled
          className='text-danger close-icon'
          style={{ height: "30px", width: "30px", alignSelf: "flex-end" }}
          onClick={() => updatePlayerHide(true)}
        />
      )}
      <iframe
        width='100%'
        style={{ margin: "auto" }}
        height='120'
        src='https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&autoplay=1&feed=%2Fsubash-karki%2Forganic-house-mix-by-r3sub%2F'
        frameborder='0'
        allow='autoplay'
      ></iframe>
    </div>
  );
};

export default Player;
