import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GalleryData from "../../Assets/Gallery/gallery";
import Particle from "../Particle";
import "./gallery.css";

const Gallery = ({ updatePlayerHide }) => {
  const [galleryData, setGalleryData] = useState([]);
  const [file, setFile] = useState(null);
  console.log("GalleryData", GalleryData);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        GalleryData.map(async (item) => {
          console.log("item", item);
          return {
            ...item,
            url: await item.url,
            thumbnail: await item.thumbnail,
          };
        })
      );
      setGalleryData(data);
      console.log("data", data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (updatePlayerHide) updatePlayerHide(true);
  }, []);
  return (
    <Container fluid className='about-section' style={{ minHeight: "100vh" }}>
      <Particle />
      {galleryData && (
        <div className='gallery-container'>
          {galleryData.map((file, index) => {
            return (
              <div className='media' key={index} onClick={() => setFile(file)}>
                {file.type === "image" ? (
                  <img src={file.url.default} alt='Image of DJ R3SUB' />
                ) : (
                  <video
                    src={file.url.default}
                    poster={file.thumbnail.default}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
      {file && (
        <div
          className='popup-media'
          style={{ display: file ? "block" : "none" }}
        >
          <span onClick={() => setFile(null)}>&times;</span>
          {file?.type === "video" ? (
            <video src={file.url.default} autoPlay controls />
          ) : (
            <img src={file.url.default} />
          )}
        </div>
      )}
    </Container>
  );
};

export default Gallery;
