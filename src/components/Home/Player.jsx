import React from "react";

const Player = ({ className }) => {
  return (
    <div>
      <iframe
        className={className}
        width='50%'
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
