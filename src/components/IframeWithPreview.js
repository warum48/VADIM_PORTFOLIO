import React, { useState, useEffect, useRef } from "react";
import ImageWithGray from "./ImageWithGray";
import "./playpause.scss";
import { useToggle } from "./Utils";
import FadeIn from "./FadeIn";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const posBL = css`
  top: 100%;
  left: 0%;
  transform: translate(0%, -100%) scale(0.4, 0.4);
`;
const posTR = css`
  top: 0%;
  left: 100%;
  transform: translate(-100%, 0%) scale(0.4, 0.4);
`;

const PlayPause = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;

  opacity: 0.7;
  filter: drop-shadow(2px 3px 3px gray);

  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 74px;

  border-color: transparent transparent transparent white;
  transition: 300ms all ease;
  cursor: pointer;

  border-style: solid;
  border-width: 37px 0 37px 60px;

  &.paused {
    border-style: double;
    border-width: 0px 0 0px 60px;
    ${(props) => (props.pos === "BL" ? posBL : posTR)}
  }

  &:hover {
    border-color: transparent transparent transparent white;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0f0;
  opacity: 0;
  z-index: 400;
  cursor: pointer;
`;

export const IframeWithPreview = ({
  iframeSrc,
  imgSrc,
  pausePosition = "BL",
  width = 240,
  height = 400,
  ...rest
}) => {
  const [iframeShow, seIframeShow] = useState(false);
  const [isOn, toggleIsOn] = useToggle();

  return (
    <div
      className="iframe-and-image-wrapper position-relative overflow-hidden"
      onClick={toggleIsOn}
    >
      <Overlay />
      {/*<button
        className={`playpausebutton ${isOn ? "paused" : ""}`}
        onClick={toggleIsOn}
      ></button>*/}
      <PlayPause
        //onClick={toggleIsOn}
        pos={pausePosition}
        className={`${isOn ? "paused" : ""}`}
      />
      {(!isOn || true) && (
        <ImageWithGray
          //key={`16:9-${index}`}
          aspectRatio="240:400"
          //src={dB.mainfolder + "/" + item.folder + "/" + item.preview}
          src={imgSrc}
        />
      )}
      {isOn && (
        <>
          <iframe
            title="ifr"
            src={iframeSrc}
            width="240px"
            height="400px"
            className="bg-light p-0 m-0 d-block position-absolute top-0 start-0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>

          {/*<FadeIn transformEnabled={false}><span>test</span></FadeIn>*/}
        </>
      )}
    </div>
  );
};
