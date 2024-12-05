/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
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
import Tilt from "react-parallax-tilt";
import { ShowMoreButton } from "./ShowMoreButton";
import * as constants from "../CONSTS";

const LogoContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
`;
const LogoName = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 800;
`;

const StyledBody = styled(Card.Body)`
  min-height: 140px ;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ItemCardMasonry = ({ item, type }) => {
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      {item.show_more === "true" ? (
        <Card style={{ width: "100%" }} className="mb-3 overflow-hidden">
        <StyledBody >
        <ShowMoreButton />
        </StyledBody>
        </Card>
      )  : (
       
          
            <Image
              fluid
              src={
                item.cover
                  ? constants.imgurl_personal + item.cover
                  : constants.imgurl_pagekeeper + item.url
              }
            />

            
        
      )}
    </>
  );
};
