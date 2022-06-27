import React from "react";
//import styled from "styled-components";
//import css from "styled-components";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
//import { decrease, increase } from "./counterSlice";
import { setEn, setRu } from "../redux/langSlice";

const Switcher = styled.div`
  display: flex;
  margin: 0 7px;
  flex-grow: 0;
`;

const Button = styled.div`
  /* This renders the buttons above... Edit me! */
  display: flex;
  /*border-radius: 3px;
  border: 2px solid white;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 6rem;
  height: 3rem;*/
  background: transparent;
  background-color: #ffffff11;
  &:hover {
    background-color: #ffffff33;
  }
  transition: background-color 0.5s;
  color: white;
  margin: 2px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.lang === props.curlang.toUpperCase() ? "1px solid white;" : ""};
`;

const LangName = styled.div`
  display: flex;
  margin: 5px;
  /*width: 3rem;*/
  align-items: center;
  justify-content: center;
`;
const LangFlag = styled.div`
  margin: 5px;
  display: flex;
  width: 30px;
  height: 18px;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  background-image: ${(props) =>
    props.lang === "EN"
      ? "url('data:image/png;base64,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')"
      : "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3BAMAAADDfafHAAAAD1BMVEX////VKx7TKxUAOaYAMqRNdI7/AAAAeElEQVR42u3OQQ0AIRAEsJHAOSAoIDkDPPCvCRubTaugCQAAAAAAAABAb7eKk7+KraKioqKioqKioqKioqKioqKioqKioqKioqKioqKiotKpsqqY+aoYKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKo0qD4ljzd9aOLIIAAAAAElFTkSuQmCC')"};
`;

export function LangSwitch() {
  //const count = useSelector((state) => state.counter.value);
  const language = useSelector((state) => state.lang.value);
  // in our slice, we provided the name property as 'counter'
  // and the initialState with a 'value' property
  // thus to read our data, we need useSelector to return the state.counter.value
  const dispatch = useDispatch();
  // gets the dispatch function to dispatch our actions

  return (
    <Switcher>
      <Button onClick={() => dispatch(setEn())} lang={"EN"} curlang={language}>
        <LangName>EN</LangName>
        <LangFlag lang={"EN"} curlang={language} />
      </Button>
      {/*<p>{language}</p>
      <button onClick={() => dispatch(setRu())}>RU</button>*/}
      <Button onClick={() => dispatch(setRu())} lang={"RU"} curlang={language}>
        <LangName>RU</LangName>
        <LangFlag lang={"RU"} curlang={language} />
      </Button>
    </Switcher>
  );
}
