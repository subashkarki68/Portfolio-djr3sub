import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Particle from "../Particle";

const Gallery = ({ updatePlayerHide }) => {
  const [showVideo, setShowVideo] = useState(true);
  const toggleShowVideo = () => {
    setShowVideo(!showVideo);
  };
  useEffect(() => {
    if (updatePlayerHide) updatePlayerHide(true);
  }, []);
  const _renderVideo = (item) => {
    return (
      <div className='video-container'>
        <iframe
          src={item.embedUrl}
          width='560'
          height='315'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    );
  };

  const images = [
    {
      embedUrl:
        "https://www.youtube.com/embed/mrmnG2DsJi4?autoplay=0&showinfo=0",
      description: "Render custom slides (such as videos)",
      renderItem: _renderVideo,
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=0&showinfo=0",
      description: "Render custom slides (such as videos)",
      renderItem: _renderVideo,
    },
  ];

  return (
    <Container fluid className='about-section' style={{ minHeight: "100vh" }}>
      <Particle />
      <ImageGallery items={images} />
    </Container>
  );
};

export default Gallery;
