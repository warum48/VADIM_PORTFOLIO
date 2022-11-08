/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatetag } from "../redux/TagSlice";
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

import { Tag } from "./StyledTag";

const TagCont = styled.div`
  margin-top: 1rem;
`;

/*const Tag = styled.div`
  display: inline-block;
  padding: 4px 10px 5px 10px;
  background-color: gray;
  transition: all 0.5s;
  &:hover {
    background-color: #333333;
  }
  color: white;
  border-radius: 15px;
  margin: 0px 2px 4px 2px;
  cursor: pointer;
`;*/
const TagButton = styled(Tag)`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #333333;
  }
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

export const Filters = ({ dB, topMenu = false, ...props }) => {
  const [tags, setTags] = useState([""]); //react", "sounddesign", "canvas
  const tag = useSelector((state) => state.tag.value);
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("dB--", dB);
    if (dB) {
      var fullAr = [];
      Object.keys(dB).forEach((keyName, i) => {
        //console.log(keyName);
        dB[keyName].projects.forEach((item, index) => {
          if (item.tags) {
            item.tags.forEach((itemm, index) => {
              if (fullAr.indexOf(itemm) === -1) {
                fullAr.push(itemm);
              }
            });
          }
        });
      });
      setTags(fullAr);
      //console.log('i', i);

      //setFilters(db);
      //doRefresh(prev => prev + 1);
    }
  }, [dB]);
  return (
    <TagCont {...props}>
      <span
        className={topMenu ? "text-white" : ""}
        css={css`
          display: block;
          margin: 0.5rem;
        `}
      >
        FILTER BY TAG:&nbsp;
      </span>
      {tags.map((tagg, index) => (
        <TagButton
          onClick={() => dispatch(updatetag(tagg))}
          key={"key" + index}
          css={css`
            background-color: ${tag === tagg ? `#333333` : ""};
          `}
        >
          {tagg}
        </TagButton>
      ))}
      <br />
      {tag !== "" && (
        <ClearButton onClick={() => dispatch(updatetag(""))}>
          <span>CLEAR TAG</span>
        </ClearButton>
      )}
    </TagCont>
  );
};
