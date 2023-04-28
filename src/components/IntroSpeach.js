/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";
import * as constants from "../CONSTS";

const SpeachContainer = styled.div`
  width: 100%;
  /*background-color: rgb(255, 255, 255);
  margin-top: 1rem;
  padding: 1rem;*/
  padding-bottom: 2rem;
`;

const Name = styled.span`
  /*font-family: "Source Sans Pro", sans-serif;*/
  font-family: "Exo 2", sans-serif;
  /*font-family: "Russo One", sans-serif;*/
  font-weight: 700;
  display: inline;

  font-size: 26px;
  line-height: 28px;
  /*margin-bottom: 20px;
  font-size: 12px;*/
`;

const MainInfo = styled.div`
  background-color: white;
  margin-top: 1rem;
  padding: 1rem 1rem 1.5rem 1rem;
  position: relative;

  li {
    margin-bottom: 18px;
    line-height: 160%;

    /*background-color: #f6f6f6;*/
  }
`;

const NameContainer = styled.div`
  width: 100%;
  /*background-color: #7844a9; */ /*#9540e6;*/
  /*background-color: indigo;*/ /*#9540e6;*/
  /*background-image: linear-gradient(
    to right,
    #13167b,
    #1a1273,
    #1e0f6c,
    #200b64,
    #22085d,
    #181059,
    #0f1454,
    #08174f,
    #001d48,
    #07213f,
    #152434,
    #212529
  );*/

  /* red!! #9F1A82 */

  /* background: hsla(271, 43%, 46%, 1);

  background: linear-gradient(
    155deg,
    hsla(271, 43%, 46%, 1) 0%,
    hsla(313, 72%, 36%, 1) 100%
  );*/

  /*background: hsla(271, 95%, 47%, 1);

  background: linear-gradient(
    165deg,
    hsla(271, 95%, 47%, 1) 0%,
    hsla(358, 95%, 50%, 1) 100%
  );*/

  /*background: hsla(271, 95%, 47%, 1);

  background: linear-gradient(
    165deg,
    hsla(271, 95%, 47%, 1) 0%,
    hsla(332, 96%, 49%, 1) 100%
  );*/

  background: hsla(271, 96%, 33%, 1);

  /*background: linear-gradient(
    155deg,
    hsla(271, 96%, 33%, 1) 40%,
    hsla(332, 96%, 49%, 1) 100%
  );*/

  background: linear-gradient(
    155deg,
    
   
    #212529 50%,
    hsla(271, 96%, 33%, 1) 100%
  );
   /*hsla(277, 46%, 27%, 1) 30%,*/

  color: white;
  /*background-color: rgb(255, 255, 255);
  color: indigo;*/
  /*margin-top: 1rem;*/
  padding: 1rem;
  margin-bottom: 1rem;

  .subhead {
    font-size: 20px;
    font-weight: 200;
    line-height: 0px;
    font-style: italic;
    margin-top: -14px;
  }
`;

const Bullet = styled.span`
  width: 20px;
  height: 12px;
  margin-right: 4px;
  display: inline-block;
  background-color: #7844a9;
`;

const Peace = styled.div`
  width: 100%;
  background-color: var(--yellowalert);
  margin-top: 1rem;
  padding: 1rem;
  min-height: calc(60px + 2rem);
`;

const PeaceImg = styled.img`
  max-height: 60px;
  float: left;
  padding-right: 1rem;
`;

export const IntroSpeach = (props) => {
  const language = useSelector((state) => state.lang.value);
  useEffect(() => {}, []);
  return (
    <SpeachContainer className="text-start color-intro" id="about">
      <Row>
        <Col>
          {/*<Image
            fluid
            src={constants.imgurl_personal + "myphoto/1.jpg"}
            className={"float-start"}
            css={css`
              max-width: 150px;
              padding: 0 20px 10px 0;
            `}
          />*/}

          <div className="inline">
            {language === "en" ? (
              <>
                <MainInfo>
                  <NameContainer>
                    <Image
                      fluid
                      src={constants.imgurl_personal + "myphoto/1.jpg"}
                      className={"float-start"}
                      css={css`
                        max-width: 125px;
                        margin: 0 20px 0px 0;
                        border: 2px solid white;
                      `}
                    />
                    <Name>Vadim Rumyantsev</Name>
                    <div
                      css={css`
                        height: 6px;
                        width: 20px;
                      `}
                    ></div>

                    <span className="subhead">Frontend developer</span>
                  </NameContainer>
                  <code>
                    <strong>Stack:</strong> JavaScript ES6, TypeScript, React, GraphQl (Apollo),
                    Redux Toolkit, Preact, jQuery, Angular 1, Animation (CSS,
                    Canvas, SVG), Webpack, HTML5, CSS3, SASS, Styled Components
                    (Emotion), MUI, Bootstrap, Photoshop, Figma
                  </code>
                  <br />
                </MainInfo>
                <MainInfo>
                  <div
                    css={css`
                      padding-bottom: 4px;
                      /*font-size: 16px;*/
                    `}
                  >
                    <Bullet />
                    <strong>My experience:</strong>
                  </div>
                  <ul
                    className="block"
                    css={css`
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      padding-left: 0px;
                      padding-right: 0px;
                    `}
                  >
                    <li
                      css={css`
                        padding-left: 0px;
                      `}
                    >
                      <i>2005-2006:</i> Advertising agency "Leader". Design
                      (Photoshop), Flash, ActionScript
                    </li>
                    <li>
                      <i>2006-2010:</i> Advertising agency "Lakehouse". Design
                      (Photoshop), Flash, ActionScript, HTML-JS-CSS
                    </li>
                    <li>
                      <i>2010-2022:</i> Special projects in&nbsp;
                      <a
                        href="https://english.imedia.ru/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        "Sanoma Independent Media"
                      </a>
                      &nbsp; (Cosmopolitan, Esquire, Men's Health, Bazaar)
                      JavaScript (jQuery
                      {"-> "}Angular {"-> "}
                      React), HTML,CSS, Webpack.
                    </li>
                    <li>
                      <i>2022:</i> Freelance for advertising agency "Digitas
                      Moscow". React websites and promo applications
                    </li>
                    <li>
                      <i>2022 - today:</i> Front End Developer in LLC "Business Solutions"
                    </li>
                  </ul>
                  This portfolio is not a complete list of works, only shows the
                  spectrum of my skills.
                  <div
                    css={css`
                      position: absolute;
                      width: 100px;
                      height: 50px;
                      bottom: -3px;
                      right: -3px;
                      z-index: -1;
                      background-color: #f70576;
                      background: linear-gradient(
                        155deg,
                        hsla(271, 96%, 33%, 1) 40%,
                        hsla(332, 96%, 49%, 1) 100%
                      );
                    `}
                  ></div>
                </MainInfo>

                {/* <>
                <strong>Name:</strong> Vadim Rumyantsev
                <br />
                <strong>Year of birth:</strong> 1981
                <br />
                <strong>Specialization:</strong> Frontend developer
                <br />
                <strong>My skills: </strong> Promo websites, landing pages, web
                applications, online 2d games
                
                <br />
                <code>
                  <pre>
                    <strong>Stack:</strong> JavaScript ES6, TypeScript, React,
                    Redux Toolkit, Preact, jQuery, Angular 1, Animation (CSS,
                    Canvas, SVG), Webpack, HTML5, CSS3, SASS, Styled Components
                    (Emotion), MUI, Bootstrap, Photoshop, Figma
                  </pre>
                </code>
                <br />
                <strong>Working experience:</strong>
                <ul
                  className="block"
                  css={css`
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    padding-left: 0px;
                    padding-right: 0px;
                  `}
                >
                  <li
                    css={css`
                      padding-left: 0px;
                    `}
                  >
                    <i>2005-2006:</i> Advertising agency "Leader". Design
                    (Photoshop), Flash, ActionScript
                  </li>
                  <li>
                    <i>2006-2010:</i> Advertising agency "Lakehouse". Design
                    (Photoshop), Flash, ActionScript, HTML-JS-CSS
                  </li>
                  <li>
                    <i>2010-2022:</i> Special projects in&nbsp;
                    <a
                      href="https://english.imedia.ru/"
                      target="_blank"
                      rel="noreferrer"
                      
                    >
                      "Sanoma Independent Media"
                    </a>
                    &nbsp; (Cosmopolitan, Esquire, Men's Health, Bazaar)
                    JavaScript (jQuery
                    {"-> "}Angular {"-> "}
                    React), HTML,CSS, Webpack.
                  </li>
                  <li>
                    <i>2022:</i> Freelance for advertising agency "Digitas
                    Moscow". React websites and promo applications
                  </li>
                </ul>
                <strong>Place of birth:</strong> Moscow
                <br />
                
                This portfolio is not a complete list of works, only shows the
                spectrum of my skills.
                    </>*/}
              </>
            ) : (
              <>
                <MainInfo>
                  <NameContainer>
                    <Image
                      fluid
                      src={constants.imgurl_personal + "myphoto/1.jpg"}
                      className={"float-start"}
                      css={css`
                        max-width: 125px;
                        margin: 0 20px 0px 0;
                        border: 2px solid white;
                      `}
                    />
                    <Name>Вадим Румянцев</Name>
                    <div
                      css={css`
                        height: 6px;
                        width: 20px;
                      `}
                    ></div>

                    <span className="subhead">Frontend разработчик</span>
                  </NameContainer>
                  <code>
                    <strong>Stack:</strong> JavaScript ES6, TypeScript, React, GraphQl (Apollo),
                    Redux Toolkit, Preact, jQuery, Angular 1, Animation (CSS,
                    Canvas, SVG), Webpack, HTML5, CSS3, SASS, Styled Components
                    (Emotion), MUI, Bootstrap, Photoshop, Figma
                  </code>
                  <br />
                </MainInfo>
                <MainInfo>
                  <div
                    css={css`
                      padding-bottom: 4px;
                      /*font-size: 16px;*/
                    `}
                  >
                    <Bullet />
                    <strong>Опыт работы:</strong>
                  </div>
                  <ul
                    className="block"
                    css={css`
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    <li
                      css={css`
                        padding-left: 0px;
                      `}
                    >
                      <i>2005-2006:</i> Рекламное агенство "Передовик". Design
                      (Photoshop), Flash, ActionScript
                    </li>
                    <li>
                      <i>2006-2010:</i> Рекламное агенство "Lakehouse". Design
                      (Photoshop), Flash, ActionScript, HTML-JS-CSS
                    </li>
                    <li>
                      <i>2010-2022:</i> Спецпроекты в{" "}
                      <a
                        href="https://english.imedia.ru/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        "Sanoma Independent Media"
                      </a>
                      &nbsp; (Cosmopolitan, Esquire, Men's Health, Bazaar)
                      JavaScript (jQuery
                      {"-> "}Angular {"-> "}
                      React), HTML, SCSS, Webpack
                      <br /> Структура, сборка сайтов (React, Webpack, CRA),
                      интерактивные модули, игры, интерфейсы организации
                      рекламных блоков для контент-менеджмента, иногда верстка.
                    </li>
                    <li>
                      <i>2022:</i> Freelance в рекламном агенстве "Digitas
                      Moscow". React сайты и промо-приложения. Структура,
                      сборка, интерактивные блоки, анимация, иногда верстка.
                    </li>
                    <li>
                      <i>2022 - сегодня:</i> Ведущий программист в ООО «УК «Бизнес решения»
                    </li>
                  </ul>
                  Это портфолио не является полным списком работ, только
                  показывает спектр.
                  <div
                    css={css`
                      position: absolute;
                      width: 100px;
                      height: 50px;
                      bottom: -3px;
                      right: -3px;
                      z-index: -1;
                      background-color: #f70576;
                      background: linear-gradient(
                        155deg,
                        hsla(271, 96%, 33%, 1) 40%,
                        hsla(332, 96%, 49%, 1) 100%
                      );
                    `}
                  ></div>
                </MainInfo>
              </>
            )}
          </div>

          {/*<Peace>
            <PeaceImg src="./images/Peace_sign.svg" height="80px" />
            {language === "en" ? (
              <>
                <strong>Important:</strong> <br />
                If you serve war propaganda, then we will not work together
              </>
            ) : (
              <>
                <strong>Важно:</strong> <br />
                Если вы обслуживаете пропаганду войны, то мы с вами не
                сработаетмся
              </>
            )}
            </Peace>*/}
        </Col>
      </Row>
    </SpeachContainer>
  );
};
