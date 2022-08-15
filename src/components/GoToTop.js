/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { useInterval } from "react-use";

const TopButton = styled.button`
  border: 0;
  position: fixed;
  /*transform: translateX(-50%);*/
  z-index: 9999;
  display: inline-block;
  /*background-color: #ff9800;*/
  background-color: #999999;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  bottom: 10px;
  right: 10px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  /*opacity: 0;
  visibility: hidden;*/
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 0.8 : 0)};

  &:after {
    content: "\\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
  }
  &:hover {
    cursor: pointer;
    background-color: #333;
  }
  &:active {
    background-color: #555;
  }
  /*&.show {
    opacity: 1;
    visibility: visible;
  }*/
`;

/*current way is simple - check only one element
if needed to check array of tags use this
ES2016:
const found = arr1.some(r=> arr2.includes(r))
ES6:
const found = arr1.some(r=> arr2.indexOf(r) >= 0)
https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript*/

export const GoToTop = () => {
  //const refa = useRef(null);
  const [show, setShow] = useState(false);

  function checkScrollTop() {
    //console.log("window.scrollY", window.scrollY);
    if (window.scrollY > 100) {
      //console.log("show", show);
      if (!show) {
        setShow(true);
        //console.log("-+-show", show);
      }
    } else {
      //console.log("neshow", show);
      if (show) {
        setShow(false);
        //console.log("---ffshow", show);
      }
    }
  }

  useInterval(() => {
    checkScrollTop();
  }, 500);

  const goToTop = () => {
    //console.log("top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <TopButton onClick={goToTop} show={show}></TopButton>;
};

//custom setInterval
//https://stackoverflow.com/questions/64270739/bug-with-setinterval-in-react
