/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

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

export const IntroSpeach = (props) => {
  const language = useSelector((state) => state.lang.value);
  useEffect(() => {}, []);
  return (
    <SpeachContainer className="text-start" id="about">
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
                <strong>Name:</strong> Vadim Rumyantsev
                <br />
                <strong>Year of birth:</strong> 1981
                <br />
                <strong>Specialization:</strong> Frontend developer
                <br />
                <strong>My skills: </strong> Promo websites, landing pages, web
                applications, online 2d games
                {/* , Instagram
                games or masks*/}
                <br />
                <strong>Stack:</strong> JavaScript ES6, TypeScript, React, Redux
                Toolkit, Preact, jQuery, Angular 1, Animation (CSS, Canvas,
                SVG), Webpack, HTML5, CSS3, SASS, Styled Components (Emotion),
                MUI, Bootstrap, Photoshop, Figma
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
                  <li>
                    <i>2022:</i> Freelance for advertising agency "Digitas
                    Moscow". React websites and promo applications
                  </li>
                </ul>
                <strong>Place of birth:</strong> Moscow
                <br />
                {/*<strong>Current location:</strong> Cambodia
                <br />*/}
                This portfolio is not a complete list of works, only shows the
                spectrum of my skills.
              </>
            ) : (
              <>
                <strong>Имя:</strong> Вадим Румянцев
                <br />
                <strong>Год рождения:</strong> 1981
                <br />
                <strong>Специальность:</strong> Frontend developer
                <br />
                <strong>Stack:</strong> JavaScript ES6, TypeScript, React, Redux
                Toolkit, Preact, jQuery, Angular 1, Animation (CSS, Canvas,
                SVG), Webpack, HTML5, CSS3, SASS, Styled Components (Emotion),
                MUI, Bootstrap, Photoshop, Figma
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
                {/*<strong>Текущая локация:</strong> Камбоджа
                <br />*/}
                Это портфолио не является полным списком работ, только
                показывает спектр.
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
