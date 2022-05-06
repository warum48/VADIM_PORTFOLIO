/** @jsxImportSource @emotion/react */
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
import { LinkContainer } from "./StyledLinkContainer"; //StyledLinkContainer as
import { Tag } from "./StyledTag";

const LogoContainer = styled.div`
  min-height: 50px;
  width: 33%;
  padding-right: 1rem; /*same as card text*/
  text-align: center;
  justify-content: center;
`;

/*const Tag = styled.div`
  display: inline-block;
  padding: 4px 10px 5px 10px;
  background-color: gray;
  color: white;
  border-radius: 15px;
  margin: 0px 2px 4px 2px;
`;*/

/*const LinkContainer = styled.div`
  position: relative;
  padding-top: 10px;
  overflow: hidden;
  text-align: left;
  min-height: 10px;
  &:after {
    padding-top: 10px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 1) 90%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "➜";
    padding-right: 15px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
*/

//const imgurl_personal = "https://dev.nahab.info/aerovadim/portfolio/";
//const imgurl_shared = "https://dev.nahab.info/portfolio/";

export const ItemCard = ({ item, type }) => {
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      <Card style={{ width: "100%" }} className="mb-3">
        {/*<Card.Header className="bg-white">
          <div className="item_top d-flex w-100 p-2  justify-content-between">
            <div className="item_head center-all ps-3">{item.name}</div>
            <div
              className="item_logo"
              style={{ backgroundColor: item.logo_bg }}
            >
              <Image
                fluid
                src={imgurl_personal + item.logo}
                className="item_name"
                alt=""
              />
            </div>
          </div>
  </Card.Header>*/}
        <Card.Img variant="top" src={constants.imgurl_personal + item.img} />
        <Card.Body className="text-start">
          {/*<Card.Title>Card Title</Card.Title>*/}

          <div
            className="d-flex w-100 p-2  justify-content-between"
            css={css`
              min-height: 50px;
            `}
          >
            <LogoContainer>
              <Image
                fluid
                src={constants.imgurl_personal + item.logo}
                alt=""
                css={css`
                  background-color: ${item.logo_bg};
                  max-height: 60px;
                `}
              />
            </LogoContainer>
            <div className="vr"></div>
            <div
              className="ps-3"
              css={css`
                width: 66%;
              `}
            >
              <Card.Text className="mb-3">
                {language === "en" ? item.desc_en : item.desc_ru}
              </Card.Text>
              <div className="item_tags">
                {item.tags?.map((tag, index) => (
                  <Tag key={"i" + index}>{tag}</Tag>
                ))}
              </div>

              {type !== "also" &&
                item.url.map((url, index) => (
                  <a
                    href={url.link}
                    className="item_name"
                    key={"a" + item.name + index}
                  >
                    <LinkContainer>{url.name || url.link}</LinkContainer>
                  </a>
                ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
