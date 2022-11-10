import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const loading = keyframes`
  from {
    opacity: 0.7;
  }
  to {
    opacity: 0.2;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  line-height: 0;
`;

const ImageLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #aaaaaa;
  animation: ${loading} 1s infinite linear running alternate;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

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
  };

  useEffect(() => {
    if (containerRef.current) {
      const [ratioWidth, ratioHeight] = aspectRatio.split(":");
      const height = (maxWidth / ratioWidth) * ratioHeight;
      setContainerHeight(height);
    }
  }, [containerRef, aspectRatio, maxWidth]);

  return (
    <ImageWrapper
      ref={containerRef}
      style={{ minHeight: containerHeight, width: maxWidth }}
    >
      {(containerHeight || true) && (
        <>
          {!hasImageLoaded && <ImageLoading />}
          <Image src={src} onLoad={onImageLoaded} className="image" alt={alt} />
        </>
      )}
    </ImageWrapper>
  );
};

export default ImageWithGray;
