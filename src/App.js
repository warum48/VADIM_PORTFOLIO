/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
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
import { ItemCardMultishots } from "./components/ItemCardMultishots";
import { ItemCardMasonry } from "./components/ItemCardMasonry";
import { LangSwitch } from "./components/LangSwitch";
import { Filters } from "./components/Filters";
import { Logos } from "./components/Logos";
import { AnchorLinks } from "./components/AnchorLinks";
import { IntroSpeach } from "./components/IntroSpeach";
import { NavigationTop } from "./components/NavigationTop";
import { GoToTop } from "./components/GoToTop";
import { ErrorBoundary } from "react-error-boundary";
import { useTimeout } from "./components/Utils";
import { useInterval } from "./components/Utils";
import Masonry from "react-masonry-css";
import * as constants from "./CONSTS";
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
  const projsHolder = useRef(null);
  //const seltag = "sounddesign"; //["react", "sounddesign"];
  const seltag = useSelector((state) => state.tag.value);
  const [dB, setDB] = useState(null);
  const language = useSelector((state) => state.lang.value);
  const [renderCount, setRenderCount] = useState(0); //we need it to rerender ScrollSpy in AnkorLinks component
  //const [outsideRender, setOutsideRender] = useState(0);
  const [listIsBuilt, setListIsBuilt] = useState(false);

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 2,
    500: 2
  };

  const breakColNum = {
    /*desc: {
      default: 3,
      992: 2,
      768: 1
    },
    mob: {
      default: 4,
      992: 3,
      768: 2,
      556: 1
    },
    also: {
      default: 4,
      992: 4,
      768: 3,
      556: 2
    },
    compact: {
      default: 4,
      992: 4,
      768: 3,
      556: 2
    }*/
    desc: {
      default: 3,
      1200: 2,
      992: 1
      //768: 1
    },
    mob: {
      default: 4,
      1200: 3,
      992: 2,
      //768: 2,
      556: 1
    },
    also: {
      default: 4,
      // 1200: 4,
      992: 3,
      // 768: 3,
      556: 2,
      320: 1
    },
    compact: {
      default: 4,
      //1200: 4,
      992: 3,
      // 768: 3,
      556: 2,
      320: 1
    },
    multi: {
      default: 1
      //1200: 2,
      //992: 1
      //768: 1
    }
  };

  useEffect(() => {
    //console.log("constants.imgurl_personal + ", constants.imgurl_personal);
    fetch(constants.imgurl_personal + "DB.json")
      //fetch("DB.json")
      .then((res) => res.json())
      //.then(setDB);
      .then((data) => {
        //console.log("data:", data);
        //console.log("data:", data.implants);
        setDB(data);
      });
  }, []);

  useEffect(() => {
    setRenderCount((prev) => setRenderCount(prev + 1));
    //outsideRender
    //setTimeout(() => {
    //setOutsideRender(outsideRender + 1);
    //console.log("or", outsideRender);
    //}, 1000);
  }, [dB]);

  useInterval(logH, listIsBuilt ? 10000000 : 1000);

  function logH() {
    var offsetHeight = projsHolder.current.offsetHeight;
    //console.log("offsH", offsetHeight);
    if (offsetHeight > 0) {
      if (!listIsBuilt) {
        setRenderCount((prev) => setRenderCount(prev + 1));
        //setOutsideRender(outsideRender + 1);
      }
      setListIsBuilt(true);
    }
  }
  //key={"or" + outsideRender}
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
              {dB && (
                <AnchorLinks
                  dB={dB}
                  renderCount={renderCount}
                  //outsideRender={outsideRender}
                  //setOutsideRender={setOutsideRender}
                />
              )}
              <hr className="my-3" />

              {isDesktop && (
                <>
                  <Filters dB={dB} />
                </>
              )}
            </LeftMenu>
          </Col>
          <Col sm={8} md={8} lg={9}>
            <div>
              <Row>
                <Col md={7}>
                  <IntroSpeach />
                </Col>
                <Col md={5} className="d-none d-md-block">
                  <Logos dB={dB} />
                </Col>
              </Row>
              <div className="projsholder" ref={projsHolder}>
                {dB &&
                  Object.keys(dB).map((keyName, i) => (
                    <React.Fragment key={"proj" + i}>
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
                        <>
                          <Masonry
                            breakpointCols={breakColNum[dB[keyName].type]}
                            className={"my-masonry-grid"}
                            columnClassName={"my-masonry-grid_column"}
                          >
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
                              .map((item, index) => {
                                /*dB[keyName].type !== "also" &&
                                dB[keyName].type !== "compact" ? (
                                  <ItemCard
                                    item={item}
                                    type={dB[keyName].type}
                                    key={"itemcard" + index}
                                  />
                                ) : (
                                  <ItemCardSimple
                                    item={item}
                                    type={dB[keyName].type}
                                    key={"itemcard" + index}
                                  />
                                )*/

                                if (
                                  dB[keyName].type === "also" ||
                                  dB[keyName].type === "compact"
                                ) {
                                  return (
                                    <ItemCardSimple
                                      item={item}
                                      type={dB[keyName].type}
                                      key={"itemcard" + index}
                                    />
                                  );
                                } else if (
                                  dB[keyName].type === "desc" ||
                                  dB[keyName].type === "mob"
                                ) {
                                  return (
                                    <ItemCard
                                      item={item}
                                      type={dB[keyName].type}
                                      key={"itemcard" + index}
                                    />
                                  );
                                } else if (dB[keyName].type === "multi") {
                                  return (
                                    <ItemCardMultishots
                                      item={item}
                                      //type={dB[keyName].type}
                                      type={"desc"}
                                      key={"itemcard" + index}
                                    />
                                  );
                                }

                                return <div>type not found</div>;
                              })}
                          </Masonry>
                        </>
                      </Row>
                    </React.Fragment>
                  ))}
              </div>
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
/*{
        "name": "Gazprom",
        "name_ru": "Газпром",
        "logo": "sites/neft/logo.svg",
        "desc_en": "Oilfields of Russia",
        "desc_ru": "Карта нефтяных месторождений в России",
        "img": ["sites/neft/1.jpg"],
        "url": [
          {
            "link": "https://sp.popmech.ru/neft/#!/"
          }
        ],
        "tags": ["map", "angular1", "canvas"]
      },*/
