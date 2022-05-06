/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
//import { images } from "./image-data";
import * as constants from "../CONSTS";

const DirButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

const LeftButton = styled(DirButton)`
  left: 10px;
  transform: scale(-1);
`;

const RightButton = styled(DirButton)`
  right: 10px;
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const SliderFM = ({ images, sizeKeeperSrc }) => {
  //const [[page, direction], setPage] = useState([0, 0]);

  const [slideNum, setSlideNum] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setSlideNum((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };
  const prev = () => {
    setDirection(-1);
    setSlideNum((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  //let imageIndex = useRef(0); //wrap(0, images.length, page);
  //const imageIndex = wrap(0, images.length, page);

  /*useEffect(() => {
    //imageIndex.current = wrap(0, images.length, page);
    console.log("imgaes", images);
  }, [images]);*/

  const paginate = (newDirection) => {
    //setPage([page + newDirection, newDirection]);
    if (newDirection === 1) {
      next();
    } else {
      prev();
    }
  };

  return (
    <>
      <img
        style={{ opacity: 0 }}
        src={constants.imgurl_personal + sizeKeeperSrc}
        className="img-fuild"
        alt=""
      />

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={images[slideNum]}
          src={constants.imgurl_personal + images[slideNum]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: "absolute", width: "100%", top: "0px" }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <RightButton onClick={() => paginate(1)}>{"‣"}</RightButton>
      <LeftButton className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </LeftButton>
    </>
  );
};
