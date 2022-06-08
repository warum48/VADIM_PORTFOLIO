/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isDesktop
} from "react-device-detect";

//change

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Image,
  Button,
  Accordion,
  Card,
  useAccordionButton
} from "react-bootstrap";
//import { Item } from "./other/Item";
import { EmptyJSX } from "./components/EmptyJSX";
import { ItemCard } from "./components/ItemCard";
import { ItemCardSimple } from "./components/ItemCardSimple";
import { LangSwitch } from "./components/LangSwitch";
import { Filters } from "./components/Filters";
import { AnchorLinks } from "./components/AnchorLinks";
import { IntroSpeach } from "./components/IntroSpeach";
import { NavigationTop } from "./components/NavigationTop";
import { GoToTop } from "./components/GoToTop";
import { ErrorBoundary } from "react-error-boundary";

import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//import "./DB.json";

const SectionHead = styled.div`
  font-size: 30px;
  font-weight: 200;
  text-align: left;
  padding: 15px;
`;

const SectionHeadAlso = styled.div`
  font-size: 16px;
  font-weight: 200;
  text-align: left;
  padding: 10px 015px;
`;

const LeftMenu = styled.div`
  /*position: sticky;
  top: 88px;
  height: 80vh;
  overflow: auto;*/
`;

export default function App() {
  const texts = {
    also: { en: "Also:", ru: "A так же:" }
  };
  //const seltag = "sounddesign"; //["react", "sounddesign"];
  const seltag = useSelector((state) => state.tag.value);
  const [dB, setDB] = useState(null);
  const language = useSelector((state) => state.lang.value);

  useEffect(() => {
    fetch("DB.json")
      .then((res) => res.json())
      //.then(setDB);
      .then((data) => {
        //console.log("data:", data);
        //console.log("data:", data.implants);
        setDB(data);
      });
  }, []);

  return (
    <div className="App">
      <NavigationTop dB={dB} />
      <GoToTop />
      <Container
        fluid
        css={css`
          padding-top: 70px;
        `}
      >
        <Row>
          <Col sm={4} md={4} lg={3} className="bg-light d-none d-sm-block">
            <LeftMenu>
              <AnchorLinks dB={dB} />
              <hr className="my-3" />

              {isDesktop && <Filters dB={dB} />}
            </LeftMenu>
          </Col>
          <Col sm={8} md={8} lg={9}>
            <div>
              <Row>
                <Col>
                  <IntroSpeach />
                </Col>
              </Row>

              {dB &&
                Object.keys(dB).map((keyName, i) => (
                  <React.Fragment key={keyName}>
                    {dB[keyName].projects.filter((it) => {
                      if (seltag === "") {
                        return true;
                      } else {
                        return (
                          it.tags !== undefined &&
                          it.tags.indexOf(seltag) !== -1
                        );
                      }
                    }).length > 0 && (
                      <Row>
                        <Col>
                          {dB[keyName].type !== "also" ? (
                            <SectionHead id={keyName}>
                              {dB[keyName].description || dB[keyName].type}:
                            </SectionHead>
                          ) : (
                            <SectionHeadAlso>
                              {dB[keyName].show_header ? (
                                <SectionHead id={keyName}>
                                  {dB[keyName].description}:
                                </SectionHead>
                              ) : (
                                texts.also[language]
                              )}
                            </SectionHeadAlso>
                          )}
                        </Col>
                      </Row>
                    )}

                    <Row>
                      {dB[keyName].projects
                        .filter((it) => {
                          if (seltag === "") {
                            return true;
                          } else {
                            return (
                              it.tags !== undefined &&
                              it.tags.indexOf(seltag) !== -1
                            );
                          }
                        })
                        .map((item, index) =>
                          dB[keyName].type !== "also" ? (
                            <Col
                              sm={dB[keyName].type === "desc" ? 12 : 6}
                              md={dB[keyName].type === "desc" ? 12 : 6}
                              lg={dB[keyName].type === "desc" ? 6 : 4}
                              xl={dB[keyName].type === "desc" ? 4 : 3}
                              key={"it" + i + index}
                              className="item"
                            >
                              <ItemCard item={item} type={dB[keyName].type} />
                            </Col>
                          ) : (
                            <Col
                              xs={6}
                              lg={3}
                              key={"it" + i + index}
                              className="item"
                            >
                              <ItemCardSimple
                                item={item}
                                type={dB[keyName].type}
                              />
                            </Col>
                          )
                        )}
                    </Row>
                  </React.Fragment>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//https://sp.imweb.ru/implant/sp/cosmonautday2021/templates/default/preview.html
//https://dev.nahab.info/banner/dist/2017_08_mcdonalds_yourname/RamblerPMP/970x250/
//https://dev.nahab.info/banner/dist/2021_01_mcdmonopoly_base64/
/*
{
        "name": "miele2021",
        "url": "https://sp.esquire.ru/miele2021/",
        "img": ["logos/miele-logo.png"],
        "tags": ["react"]
      },
      {
        "name": "azbukazdorovihnog",
        "url": "https://sp.cosmo.ru/azbukazdorovihnog/",
        "img": ["logos/lioton-logo.svg"],
        "tags": ["react"]
      },

      {
        "name": "creon2021",
        "url": "https://sp.bazaar.ru/kreon2021/",
        "img": ["logos/creon-logo.jpeg"],
        "tags": ["react"]
      },
      */
