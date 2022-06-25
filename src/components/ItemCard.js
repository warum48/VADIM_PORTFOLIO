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
import { SwiperSlider } from "./SwiperSlider";
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
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} tiltEnable={isDesktop}>
      <Card style={{ width: "100%" }} className="mb-3 overflow-hidden">
        {item.img.length <= 1 ? (
          <Card.Img variant="top" src={constants.imgurl_personal + item.img} />
        ) : (
          <>
            {/*<Card.Img
            variant="top"
            src={constants.imgurl_personal + item.img[0]}
          />*/}
            <SwiperSlider images={item.img} />
          </>
        )}

        <Card.Body
          className="text-start"
          css={css`
            border-top: 1px #dddddd solid;
          `}
        >
          <div
            className="d-flex w-100 p-2  justify-content-between"
            css={css`
              min-height: 50px;
            `}
          >
            {type !== "mob" && item.logo && (
              <>
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
                <div className="vr"></div>{" "}
              </>
            )}
            <div
              className="ps-3"
              css={css`
                width: ${type !== "mob" ? `66%` : "100%"};
              `}
            >
              {type == "mobbbb" ||
                (false && (
                  <LogoContainer>
                    <Image
                      fluid
                      src={constants.imgurl_personal + item.logo}
                      alt=""
                      css={css`
                        background-color: ${item.logo_bg};
                        max-height: 60px;
                        margin-top: -160px;
                      `}
                    />
                  </LogoContainer>
                ))}

              <Card.Text
                className="mb-3"
                css={css`
                  font-size: 0.9rem;
                `}
              >
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
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <LinkContainer>{url.name || "View"}</LinkContainer>
                  </a>
                ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Tilt>
  );
};
