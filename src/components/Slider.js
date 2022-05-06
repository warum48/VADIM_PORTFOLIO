import React, { useEffect, useState } from "react";
import { ImgAsSlideShow } from "./ImgAsSlideShow";

export const Slider = ({ images }) => {
  const [slideNum, setSlideNum] = useState(0);

  const next = () => {
    setSlideNum((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };
  const prev = () => {
    setSlideNum((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  return (
    <>
      <ImgAsSlideShow
        src={images[slideNum]}
        sizeKeeperSrc={images[0]}
        className="img-fluid"
      />
      <button onClick={next}>next</button>
      <button onClick={prev}>prev</button>
    </>
  );
};
