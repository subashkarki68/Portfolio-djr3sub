import React from "react";
import { isMobile } from "react-device-detect";
import { RxCrossCircled } from "react-icons/rx";

const Player = ({ className, playerHide, updatePlayerHide }) => {
  const width = isMobile ? "95%" : "50%";
  return (
    <div
      className={`${className} d-flex flex-column`}
      style={{ width: width, margin: "auto" }}
    >
      {!playerHide && (
        <RxCrossCircled
          className='text-danger close-icon z-999'
          style={{ height: "30px", width: "30px", alignSelf: "flex-end" }}
          onClick={() => updatePlayerHide(true)}
        />
      )}
      {isMobile ? (
        <iframe
          width='100%'
          height='60'
          src='https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2Fsubash-karki%2Forganic-house-mix-by-r3sub%2F'
          frameborder='0'
          allow='autoplay'
        ></iframe>
      ) : (
        <iframe
          width='100%'
          style={{ margin: "auto" }}
          height='120'
          src='https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&autoplay=1&feed=%2Fsubash-karki%2Forganic-house-mix-by-r3sub%2F'
          frameborder='0'
          allow='autoplay'
        ></iframe>
      )}
    </div>
  );
};

export default Player;
