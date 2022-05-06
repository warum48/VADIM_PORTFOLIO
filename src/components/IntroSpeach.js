/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as constants from "../CONSTS";
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

const SpeachContainer = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 1rem;
  padding: 1rem;
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

/*const LiSpan = styled.span`
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 1rem;
  padding: 1rem;
`;*/

/*const SpeachHead = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 1rem;
  padding: 1rem;
`;*/

export const IntroSpeach = (props) => {
  const language = useSelector((state) => state.lang.value);
  useEffect(() => {}, []);
  return (
    <SpeachContainer className="text-start">
      {/*<Row>
        <Col xs={4} md={3} lg={2}>
          <Image fluid src={constants.imgurl_personal + "myphoto/1.jpg"} />
        </Col>
        <Col xs={8} md={9} lg={10}>
          <div className="inline">
            <strong>Name:</strong> Vadim Rumyantsev
            <br />
            <strong>Age:</strong> 40
            <br />
            <strong>Specialization:</strong> Frontend developer
            <br />
            <strong>Stack:</strong> JavaScript ES6, React, Webpack, HTML5, CSS3,
            Preact, jQuery, Animation (CSS, Canvas, SVG)
            <br />
          </div>
        </Col>
        <Col className="py-3" md={9} lg={10}>
          <strong>Опыт работы</strong> в веб-разработке 15 лет, в то время
          наиболее интересные сайты и приложения делались на Flash/ActionScript,
          с его угасанием перешел на JavaScript (jQuery {"-> "}Angular {"-> "}
          React), продолжая выполнять те же задачи
        </Col>
      </Row>*/}
      <Row>
        <Col>
          <Image
            fluid
            src={constants.imgurl_personal + "myphoto/1.jpg"}
            className={"float-start"}
            css={css`
              max-width: 150px;
              padding: 0 20px 10px 0;
            `}
          />

          <div className="inline">
            {language === "en" ? (
              <>
                <strong>Name:</strong> Vadim Rumyantsev
                <br />
                <strong>Age:</strong> 40
                <br />
                <strong>Specialization:</strong> Frontend developer
                <br />
                <strong>Stack:</strong> JavaScript ES6, React, Preact, jQuery,
                Angular 1, Animation (CSS, Canvas, SVG), Webpack, HTML5, CSS3
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
                      /*css={css`
                    font-size: 1rem;
                  `}*/
                    >
                      "Sanoma Independent Media"
                    </a>
                    &nbsp; (Cosmopolitan, Esquire, Men's Health, Bazaar)
                    JavaScript (jQuery
                    {"-> "}Angular {"-> "}
                    React), HTML,CSS, Webpack
                  </li>
                </ul>
                <strong>Place of birth:</strong> Moscow
                <br />
                <strong>Current location:</strong> Cambodia
                <br />
                This portfolio is not a complete list of works, only shows the
                spectrum.
              </>
            ) : (
              <>
                <strong>Имя:</strong> Вадим Румянцев
                <br />
                <strong>Возраст:</strong> 40
                <br />
                <strong>Специальность:</strong> Frontend developer
                <br />
                <strong>Stack:</strong> JavaScript ES6, React, Webpack, HTML5,
                CSS3, Preact, jQuery, Animation (CSS, Canvas, SVG)
                <br />
                <strong>Опыт работы:</strong>
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
                      /*css={css`
                    font-size: 1rem;
                  `}*/
                    >
                      "Sanoma Independent Media"
                    </a>
                    &nbsp; (Cosmopolitan, Esquire, Men's Health, Bazaar)
                    JavaScript (jQuery
                    {"-> "}Angular {"-> "}
                    React), HTML,CSS, Webpack
                  </li>
                </ul>
                <strong>Место регистрации:</strong> Москва
                <br />
                <strong>Текущая локация:</strong> Камбоджа
                <br />
                Это портфолио не явлеются полным списком работ, только
                показывает спектр.
              </>
            )}
          </div>

          <Peace>
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
          </Peace>
        </Col>
      </Row>
    </SpeachContainer>
  );
};
