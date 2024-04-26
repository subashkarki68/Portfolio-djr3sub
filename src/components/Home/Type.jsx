import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Afrobeats",
          "Amapiano",
          "Tropical House",
          "Chill",
          "Jazz",
          "Soul",
          "Deep House",
          "Reggae",
          "Bossa Nova",
          "Latin Jazz",
          "Acoustic",
          "Indie Pop",
          "Funk",
          "Highlife",
          "Kizomba",
          "Soca",
          // Add more favorite genres here as needed
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
