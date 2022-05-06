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

const imgurl_personal = "https://dev.nahab.info/aerovadim/portfolio/";
const imgurl_shared = "https://dev.nahab.info/portfolio/";

export const Item = ({ item }) => {
  const [lang, setLang] = useState("ru");
  const language = useSelector((state) => state.lang.value);
  return (
    <>
      <div className="item_cont rounded shadow-sm">
        <div className="item_top d-flex w-100 p-2  justify-content-between">
          <div className="item_head center-all ps-3">{item.name}</div>
          <div className="item_logo" style={{ backgroundColor: item.logo_bg }}>
            <Image
              fluid
              src={imgurl_personal + item.logo}
              className="item_name"
              alt=""
            />
          </div>
        </div>
        <hr />

        <div className="item_desc">
          {language === "en" ? item.desc_en : item.desc_ru}
        </div>

        <Image
          fluid
          src={imgurl_personal + item.img}
          className="item_name "
          alt=""
        />

        <a href={item.url} className="item_name">
          <div className="item_link_cont">{item.url}</div>
        </a>

        <div className="item_tags">
          {item.tags?.map((tag, index) => (
            <div key={"i" + index}>{tag}</div>
          ))}
        </div>
      </div>
    </>
  );
};
