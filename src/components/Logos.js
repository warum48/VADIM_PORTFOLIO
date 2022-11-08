/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import * as constants from "../CONSTS";
import { Image } from "react-bootstrap";

const LogosCont = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  min-height: 50px;
  flex-basis: 20%;
  max-width: 60px;
  margin: 0.5rem;
  text-align: center;
  justify-content: center;
  opacity: 0.6;
  filter: grayscale(100%);
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

const LogosHead = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
  color: gray;
`;

export const Logos = ({ dB, topMenu = false, ...props }) => {
  const [logos, setLogos] = useState([""]);
  useEffect(() => {
    if (dB) {
      var fullAr = [];
      Object.keys(dB).forEach((keyName, i) => {
        dB[keyName].projects.forEach((item, index) => {
          if (item.logo) {
            if (fullAr.indexOf(item.logo) === -1) {
              fullAr.push(item.logo);
            }
          }
        });
      });
      setLogos(fullAr);
    }
  }, [dB]);
  return (
    <LogosCont {...props}>
      <LogosHead>
        {/*
        These companies are the sign of quality, they ask developers for the
      same quality"*/}
      </LogosHead>
      {logos.map((item, index) => (
        <LogoContainer key={"logo_panel" + index}>
          <Image
            fluid
            src={constants.imgurl_personal + item}
            alt=""
            css={css`
              /*background-color: ${item.logo_bg};*/
              max-height: 60px;
              margin-top: 0px;
            `}
          />
        </LogoContainer>
      ))}
    </LogosCont>
  );
};
