/** @jsxImportSource @emotion/react */ /* **/
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Accordion,
  Card,
  useAccordionButton
} from "react-bootstrap";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import * as constants from "../CONSTS";
import { LinkContainer } from "./StyledLinkContainer";
//import { Slider } from "./Slider";
//import { SliderFM } from "./SliderFM";
import { Tag } from "./StyledTag";
import Tilt from "react-parallax-tilt";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isDesktop
} from "react-device-detect";

const LogoContainer = styled.div`
  min-height: 50px;
  width: 33%;
  padding-right: 1rem;
  text-align: center;
  justify-content: center;
`;

//{/**/}
//<Slider images={item.img} sizeKeeperSrc={item.img[0]} />
//{/*<SliderFM images={item.img} sizeKeeperSrc={item.img[0]} />*/}

export const ItemCard = ({ item, type }) => {
  return <></>;
};
