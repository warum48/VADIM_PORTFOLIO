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
import { Routes, Route, Link } from "react-router-dom";

/*
const LogoContainer = styled.div`
  min-height: 50px;
  width: 33%;
  padding-right: 1rem;
  text-align: center;
  justify-content: center;
`;
*/

const MoreButton = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  padding: 8px;
  min-width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  a,
  a:hover {
    color: white;
  }
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ShowMoreButton = () => {
  return (
    <MoreButton>
      <Link to="/banners">Show more</Link>
    </MoreButton>
  );
};
