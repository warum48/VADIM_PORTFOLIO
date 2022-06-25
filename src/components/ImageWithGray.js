import React, { useState, useEffect, useRef } from "react";
import "./ImageWithGray.css"; //dfdf

const ImageWithGray = ({
  src,
  maxWidth = 240,
  alt = "loading",
  aspectRatio = "16:9",
  onLoad = () => null,

  ...rest
}) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const [containerHeight, setContainerHeight] = useState(null);
  const containerRef = useRef(null);

  const onImageLoaded = (event) => {
    setHasImageLoaded(true);
    onLoad(event);
  }; //

  /*useEffect(() => {
    if (containerRef.current) {
      const [ratioWidth, ratioHeight] = aspectRatio.split(":");
      const height =
        (containerRef.current.offsetWidth / ratioWidth) * ratioHeight;
      setContainerHeight(height);
    }
  }, [containerRef, aspectRatio]);*/

  useEffect(() => {
    if (containerRef.current) {
      const [ratioWidth, ratioHeight] = aspectRatio.split(":");
      const height = (maxWidth / ratioWidth) * ratioHeight;
      setContainerHeight(height);
    }
  }, [containerRef, aspectRatio]);

  return (
    <div
      className="image-wrapper"
      ref={containerRef}
      style={{ minHeight: containerHeight, width: maxWidth }}
    >
      {(containerHeight || true) && (
        <>
          {!hasImageLoaded && <div className="image-loading" />}
          <img src={src} onLoad={onImageLoaded} className="image" alt={alt} />
        </>
      )}
    </div>
  );
};

export default ImageWithGray;
