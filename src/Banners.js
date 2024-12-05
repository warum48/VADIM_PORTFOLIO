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
import { SteppedWidthContainer } from "./components/SteppedWidthContainer";
import ImageWithGray from "./components/ImageWithGray";
import { IframeWithPreview } from "./components/IframeWithPreview";
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
/*import { EmptyJSX } from "./components/EmptyJSX";
import { ItemCardRegular } from "./components/ItemCardRegular";
import { ItemCardSimple } from "./components/ItemCardSimple";
import { LangSwitch } from "./components/LangSwitch";
import { Filters } from "./components/Filters";
import { AnchorLinks } from "./components/AnchorLinks";
import { IntroSpeach } from "./components/IntroSpeach";*/
import { NavigationTop } from "./components/NavigationTop";
import { GoToTop } from "./components/GoToTop";
import { ErrorBoundary } from "react-error-boundary";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./redux/asyncFetch";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//import "./DB.json";

const storage_url = "https://dev.nahab.info/banner/dist/";

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

const Img = styled.img`
  max-width: 240px;
  border: 1px solid black;
  border-style: border-box;
`;

export default function Banners() {
  const texts = {
    also: { en: "Also:", ru: "A так же:" }
  };

  //const seltag = "sounddesign"; //["react", "sounddesign"];
  const seltag = useSelector((state) => state.tag.value);
  const [dB, setDB] = useState(null);
  const language = useSelector((state) => state.lang.value);
  const { entities, loading, error_ } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  //const steppedWidthContainer = useRef(null);

  useEffect(() => {
    fetch("banners.json")
      .then((res) => res.json())
      //.then(setDB);
      .then((data) => {
        //console.log("data:", data);
        //console.log("data:", data.implants);
        setDB(data);
      });

    //steppedWidthContainer.current.style.width = "720px";

    window.addEventListener("resize", onResize);

    //dispatch(getPosts());

    return () => window.removeEventListener("keyup", onResize);
  }, []);

  function onResize() {
    console.log("res", window.innerWidth);
  }

  //<div className="d-flex justify-content-center mx-auto">
  //</div>

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
          <Col>
            <SteppedWidthContainer
              //ref={steppedWidthContainer}
              style={{ minWidth: "320px", padding: "10px" }}
              step={240}
              padding={10}
              spaceAround={24}
              className=" d-flex flex-wrap justify-content-start  mx-auto"
            >
              {language == "ru"
                ? "Так вышло, что у меня большой опыт в производстве баннеров. Баннеры делались под ТТ самых известных в России площадок во всевозможных форматах"
                : ""}
              {/*<div>
                ---fetch loading--- {loading + ""} -- {entities.length} --{" "}
                {error_ + ""} --{" "}
                {entities.websites_react &&
                  entities.websites_react.projects.length}
                </div>*/}
            </SteppedWidthContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <SteppedWidthContainer
                //ref={steppedWidthContainer}
                step={240}
                padding={10}
                spaceAround={24}
                className=" d-flex flex-wrap justify-content-start  mx-auto"
              >
                {dB &&
                  dB.banners.map((item, i) => (
                    <div key={"bana" + i} style={{ padding: "10px" }}>
                      {/*<Img
                        alt=""
                        src={
                          dB.mainfolder + "/" + item.folder + "/" + item.preview
                        }
                      />*/}
                      {/*<ImageWithGray
                        //key={`16:9-${index}`}
                        aspectRatio="240:400"
                        src={
                          dB.mainfolder + "/" + item.folder + "/" + item.preview
                        }
                      />*/}

                      <IframeWithPreview
                        aspectRatio="240:400"
                        imgSrc={
                          dB.mainfolder + "/" + item.folder + "/" + item.preview
                        }
                        iframeSrc={
                          dB.mainfolder +
                          "/" +
                          item.folder +
                          "/" +
                          item.preview_url
                        }
                        pausePosition={item.position}
                      />
                    </div>
                  ))}
              </SteppedWidthContainer>
            </div>

            {/*<div className="text-center">
              <div className="d-inline text-start">
                {dB &&
                  dB.banners.map((item, i) => (
                    <div key={item} className="d-inline-block  _text-start ">
                      <img
                        alt=""
                        src={
                          dB.mainfolder + "/" + item.folder + "/" + item.preview
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>*/}
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

//https://dev.nahab.info/banner/dist/2018_03_sberbank/_masters/master_master_240x400/240x400.html
//https://dev.nahab.info/banner/dist/2018_05_chevrolet_tahoe/240x400/240x400.html
//https://dev.nahab.info/banner/dist/2018_05_sberbank/240x400/240x400.html
//https://dev.nahab.info/banner/dist/2017_04_aftersales_opel/yandex_rtb/240x400/240x400.html
