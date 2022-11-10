/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import { isDesktop } from "react-device-detect";
import { Container, Row, Col } from "react-bootstrap";
/*import { ItemCardRegular } from "./components/ItemCardRegular";
import { ItemCardSimple } from "./components/ItemCardSimple";
import { ItemCardMultishots } from "./components/ItemCardMultishots";*/
import { ItemCard } from "./components/ItemCards/ItemCard";
import { Filters } from "./components/Filters";
import { Logos } from "./components/Logos";
import { AnchorLinks } from "./components/AnchorLinks";
import { IntroSpeach } from "./components/IntroSpeach";
import { NavigationTop } from "./components/NavigationTop";
import { GoToTop } from "./components/GoToTop";
import { useInterval } from "./components/Utils";
import Masonry from "react-masonry-css";
import * as constants from "./CONSTS";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

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

export default function App() {
  const texts = {
    also: { en: "Also:", ru: "A так же:" }
  };
  const projsHolder = useRef(null);
  const seltag = useSelector((state) => state.tag.value);
  const [dB, setDB] = useState(null);
  const language = useSelector((state) => state.lang.value);
  const [renderCount, setRenderCount] = useState(0); //we need it to rerender ScrollSpy in AnkorLinks component
  const [listIsBuilt, setListIsBuilt] = useState(false);

  const breakColNum = {
    desc: {
      default: 3,
      1200: 2,
      992: 1
    },
    mob: {
      default: 4,
      1200: 3,
      992: 2,
      556: 1
    },
    also: {
      default: 4,
      992: 3,
      556: 2,
      320: 1
    },
    compact: {
      default: 4,
      992: 3,
      556: 2,
      320: 1
    },
    multi: {
      default: 1
    }
  };

  useEffect(() => {
    fetch(constants.imgurl_personal + "DB.json")
      .then((res) => res.json())
      .then((data) => {
        setDB(data);
      });
  }, []);

  //debug--
  useEffect(() => {
    setRenderCount((prev) => setRenderCount(prev + 1));
  }, [dB]);

  useInterval(logH, listIsBuilt ? 10000000 : 1000);

  function logH() {
    var offsetHeight = projsHolder.current.offsetHeight;
    if (offsetHeight > 0) {
      if (!listIsBuilt) {
        setRenderCount((prev) => setRenderCount(prev + 1));
      }
      setListIsBuilt(true);
    }
  }
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
            <div>
              {dB && <AnchorLinks dB={dB} renderCount={renderCount} />}
              <hr className="my-3" />

              {isDesktop && <Filters dB={dB} />}
            </div>
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
                              .map((item, index) => (
                                <ItemCard
                                  item={item}
                                  dB={dB}
                                  keyName={keyName}
                                  index={index}
                                  key={"ccard" + index}
                                />
                                /* if (
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
                                    <ItemCardRegular
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

                                return <div>type not found</div>; */
                              ))}
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
