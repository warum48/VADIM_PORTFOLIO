/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { ShowMoreButton } from "./ShowMoreButton";
import * as constants from "../../CONSTS";

const LogoContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
const LogoName = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 800;
`;

const StyledBody = styled(Card.Body)`
  min-height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemCardSimple = ({ item, type }) => {
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      {item.show_more === "true" ? (
        <Card style={{ width: "100%" }} className="mb-3 overflow-hidden">
          <StyledBody>
            <ShowMoreButton />
          </StyledBody>
        </Card>
      ) : (
        <a
          href={item.url}
          className="item_name"
          target="_blank"
          rel="noreferrer"
          css={css`
            color: black;
            text-decoration: none;
          `}
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Image
                fluid
                src={
                  item.cover
                    ? constants.imgurl_personal + item.cover
                    : constants.imgurl_pagekeeper + item.url
                }
              />

              <Card.Body className="text-start">
                <div className="item_toppp d-flex w-100 p-2  justify-content-between">
                  <LogoContainer>
                    {item.logo ? (
                      <Image
                        fluid
                        src={constants.imgurl_personal + item.logo}
                        className="item_name"
                        alt=""
                        css={css`
                          background-color: ${item.logo_bg};
                          max-height: 50px;
                        `}
                      />
                    ) : (
                      <LogoName>{item.logoname || ""}</LogoName>
                    )}
                    {item.desc_en && (
                      <>{language === "en" ? item.desc_en : item.desc_ru}</>
                    )}
                  </LogoContainer>
                  {/*<div className="item_simple center-all ps-3">
                  <a
                    href={item.url}
                    className="item_name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                  </div>*/}
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </a>
      )}
    </>
  );
};
