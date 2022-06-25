/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatetag } from "../redux/TagSlice";
import * as constants from "../CONSTS";
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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isDesktop
} from "react-device-detect";

const LogosCont = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  /*display: inline-block;*/
  min-height: 50px;
  min-width: 20%;
  max-width: 20%;
  margin: 0.1rem;
  text-align: center;
  justify-content: center;
  flex: 1;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

/*const LogoButton = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  padding: 4px 10px 5px 10px;
  background-color: gray;
  color: white;
  border-radius: 15px;
  margin: 0px 2px 4px 2px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #333333;
  }
`;*/

const LogosHead = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
`;

const ClearButton = styled.button`
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
  &:hover {
    span {
      padding-right: 25px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after {
      content: "✖";
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
`;

/*current way is simple - check only one element
if needed to check array of tags use this
ES2016:
const found = arr1.some(r=> arr2.includes(r))
ES6:
const found = arr1.some(r=> arr2.indexOf(r) >= 0)
https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript*/

export const Logos = ({ dB, topMenu = false, ...props }) => {
  const [tags, setTags] = useState(["react", "sounddesign", "canvas"]);
  const tag = useSelector((state) => state.tag.value);
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("dB--", dB);
    if (dB) {
      var fullAr = [];
      Object.keys(dB).forEach((keyName, i) => {
        //console.log(keyName);
        dB[keyName].projects.forEach((item, index) => {
          if (item.logo) {
            //item.tags.forEach((itemm, index) => {
            //if (fullAr.indexOf(item) === -1) {
            fullAr.push(item);
            //}
            //});
          }
        });
      });
      setTags(fullAr);
    }
  }, [dB]);
  return (
    <LogosCont {...props}>
      <LogosHead>
        LOGOS. This companies are the sign of quality, they ask developers for
        the same quality{" "}
      </LogosHead>
      {tags.map((item, index) => (
        <LogoContainer>
          <Image
            fluid
            src={constants.imgurl_personal + item.logo}
            alt=""
            css={css`
              background-color: ${item.logo_bg};
              max-height: 60px;
              margin-top: 0px;
            `}
          />
        </LogoContainer>
      ))}
      <br />
      {tag !== "" && (
        <ClearButton
        //onClick={() => dispatch(updatetag(""))}
        >
          <span>CLEAR TAG</span>
        </ClearButton>
      )}
    </LogosCont>
  );
};
