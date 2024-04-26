import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "./gallery.css";

const PREFIX_URL =
  "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/";

const Gallery = () => {
  const [state, setState] = useState({
    infinite: true,
    showFullscreenButton: true,
    showGalleryFullscreenButton: true,
    showPlayButton: false,
    showGalleryPlayButton: true,
    showNav: true,
    slideVertically: false,
    slideDuration: 450,
    slideInterval: 2000,
    slideOnThumbnailOver: false,
    thumbnailPosition: "bottom",
    showVideo: false,
    useWindowKeyDown: true,
  });

  const _imageGallery = useRef(null);
  const _renderVideo = (item) => {
    return (
      <div className='video-container'>
        <iframe
          src={item.embedUrl}
          width='560'
          height='315'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    );
  };
  const images = [
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      description: "Render custom slides (such as videos)",
      renderItem: _renderVideo,
    },
  ];

  const _onImageClick = (event) => {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      _imageGallery.current.getCurrentIndex()
    );
  };

  const _onImageLoad = (event) => {
    console.debug("loaded image", event.target.src);
  };

  const _onSlide = (index) => {
    _resetVideo();
    console.debug("slid to index", index);
  };

  const _onPause = (index) => {
    console.debug("paused on index", index);
  };

  const _onScreenChange = (fullScreenElement) => {
    console.debug("isFullScreen?", !!fullScreenElement);
  };

  const _onPlay = (index) => {
    console.debug("playing from index", index);
  };
  const _resetVideo = () => {
    if (_imageGallery.current) {
      _imageGallery.current.forceSeekTo(0);
    }
  };

  return (
    <Container fluid className='App'>
      <ImageGallery
        ref={_imageGallery}
        items={images}
        onImageLoad={_onImageLoad}
        onSlide={_onSlide}
        onPause={_onPause}
        onScreenChange={_onScreenChange}
        onPlay={_onPlay}
        onImageClick={_onImageClick}
      />
    </Container>
  );
};

export default Gallery;
