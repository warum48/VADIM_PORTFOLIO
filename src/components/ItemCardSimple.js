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

export const ItemCardSimple = ({ item, type }) => {
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      {item.show_more === "true" ? (
        <ShowMoreButton />
      ) : (
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <Card style={{ width: "100%" }} className="mb-3">
            {/*<Card.Img
          variant="top"
          src={constants.imgurl_pagekeeper + item.url}
          className="p-3"
        />*/}
            <Image
              fluid
              src={
                item.cover
                  ? constants.imgurl_personal + item.cover
                  : constants.imgurl_pagekeeper + item.url
              }
            />

            <Card.Body className="text-start">
              {/*<Card.Text className="mb-1">
            <a href={item.url} className="item_name">
              {item.url}
            </a>
          </Card.Text>*/}
              <div className="item_toppp d-flex w-100 p-2  justify-content-between">
                <LogoContainer
                //className="item_logo_also"
                //style={{ backgroundColor: item.logo_bg }}
                >
                  {item.img ? (
                    <Image
                      fluid
                      src={constants.imgurl_personal + item.img}
                      className="item_name"
                      alt=""
                      css={css`
                        background-color: ${item.logo_bg};
                        max-height: 60px;
                      `}
                    />
                  ) : (
                    <LogoName>{item.logoname || ""}</LogoName>
                  )}
                  {item.desc_en && (
                    <>{language === "en" ? item.desc_en : item.desc_ru}</>
                  )}
                </LogoContainer>
                <div className="item_simple center-all ps-3">
                  <a
                    href={item.url}
                    className="item_name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      )}
    </>
  );
};
