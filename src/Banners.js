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

export default function Banners() {
  const texts = {
    also: { en: "Also:", ru: "A так же:" }
  };

  //const seltag = "sounddesign"; //["react", "sounddesign"];
  const seltag = useSelector((state) => state.tag.value);
  const [dB, setDB] = useState(null);
  const language = useSelector((state) => state.lang.value);
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
            <div className="d-flex justify-content-center">
              <SteppedWidthContainer
                //ref={steppedWidthContainer}
                step={240}
                spaceAround={24}
                className=" d-flex flex-wrap justify-content-start  mx-auto"
              >
                {dB &&
                  dB.banners.map((item, i) => (
                    <div key={item}>
                      <img
                        alt=""
                        src={
                          dB.mainfolder + "/" + item.folder + "/" + item.preview
                        }
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
