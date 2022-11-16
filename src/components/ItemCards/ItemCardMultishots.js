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
import * as constants from "../../CONSTS";
import { LinkContainer } from "./StyledLinkContainer";
//import { Slider } from "./Slider";
//import { SliderFM } from "./SliderFM";
import { SwiperSlider } from "./SwiperSlider";
import { Tag } from "../StyledTag";

const LogoContainer = styled.div`
  min-height: 50px;
  width: 33%;
  min-width: 80px;
  max-width: 200px;
  padding-right: 1rem;
  text-align: center;
  justify-content: center;
`;

const StyledBody = styled(Card.Body)`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MultiShots = styled.div`
  width: 100%;
  /*min-width: 500px;
  background-color: red;*/
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  @media (max-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  gap: 4px;
`;

/*const MultiShotsItem = styled.div`

  background-color: red;
  display: grid;
`; */

//{/**/}
//<Slider images={item.img} sizeKeeperSrc={item.img[0]} />
//{/*<SliderFM images={item.img} sizeKeeperSrc={item.img[0]} />*/}

export const ItemCardMultishots = ({ item, type }) => {
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      {item.show_more === "true" ? (
        <Card style={{ width: "100%" }} className="mb-3 overflow-hidden">
          <StyledBody></StyledBody>
        </Card>
      ) : (
        <Card style={{ width: "100%" }} className="mb-3 overflow-hidden">
          {type === "multi" ? (
            <MultiShots>
              {item.img.map((image, index) => (
                <div key={"imke" + index}>
                  <Image fluid src={constants.imgurl_personal + image} alt="" />
                </div>
              ))}
            </MultiShots>
          ) : (
            <div style={{ width: "100%" }}>
              <SwiperSlider images={item.img} />
            </div>
          )}
          <Card.Body
            className="text-start"
            css={css`
              border-top: 1px #dddddd solid;
            `}
          >
            <div
              // justify-content-between
              className="d-flex w-100 p-2 "
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
                css={css`
                  background-color: "white";
                  padding-left: 20px;
                `}
              >
                {/*type == "mobbbb" ||
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
                  ))*/}

                <Card.Text
                  className="mb-3"
                  css={css`
                    font-size: 0.9rem;
                    @media (min-width: 996px) {
                      max-width: 70%;
                    }
                  `}
                >
                  {language === "en" ? item.desc_en : item.desc_ru}
                </Card.Text>
                <div
                  className="item_tags"
                  css={css`
                    margin-left: -2px;
                  `}
                >
                  {item.tags?.map((tag, index) => (
                    <Tag key={"i" + index}>{tag}</Tag>
                  ))}
                </div>

                {type !== "also" &&
                  item.url &&
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
      )}
    </>
  );
};
