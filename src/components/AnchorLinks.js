/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import Scrollspy from "./Third-party/scrollspy";
import { useDebounce } from "./Utils";
import { isSafari } from "react-device-detect"; //
import { useMediaQuery } from "react-responsive";
import SmoothScroll from "smooth-scroll";
import { Routes, Route, Link, useLocation } from "react-router-dom";
//import { HashLink } from "react-router-hash-link";

const LinksCont = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const AnkorLink = styled.div`
  display: block;
  padding: 4px 10px 5px 10px;
  font-size: 1rem;
  transition: all 0.5s;
  &:hover {
    /*color: ${(props) =>
      props.topmenu ? "var(--lightblue)" : "var(--darkblue)"};*/
      color: var(--lightblue) ;
  }
  
  border-radius: 15px;
  margin: 0px 2px 4px 2px;
  cursor: pointer;

  a{
    color: ${(props) => (props.topmenu ? "white" : "black")};
    &:hover {
    /*color: ${(props) =>
      props.topmenu ? "var(--lightblue)" : "var(--darkblue)"};*/
      color: var(--lightblue) ;
  }
  }
`;

const ClearButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  padding: 8px;
  min-width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  &:hover {
    span {
      padding-right: 25px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after {
      content: "✖";
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
`;

/*current way is simple - check only one element
if needed to check array of tags use this
ES2016:
const found = arr1.some(r=> arr2.includes(r))
ES6:
const found = arr1.some(r=> arr2.indexOf(r) >= 0)
https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript*/

export const AnchorLinks = ({
  dB,
  //readyToDraw = false,
  renderCount,
  setOpen = null,
  outsideRender = 0,
  setOutsideRender = () => {},
  ...props
}) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 991px)" });
  const smoothScroll = useRef(null);
  const [menuIdAr, setMenuIdAr] = useState([]);
  const [browserHash, setBrowserHash] = useState("");
  const debouncedBrowserHash = useDebounce(browserHash, 200);

  const [menuAr, setMenuAr] = useState([]);

  useEffect(() => {
    //var menuAr = [];
    if (dB) {
      var headAr = Object.keys(dB).map(function (keyName, i) {
        return { name: dB[keyName].description, id: keyName };
      });
      setMenuAr(headAr);
    }
  }, [dB]);

  useEffect(() => {
    var tempIdAr = menuAr.map(function (item) {
      return item.id;
    });
    console.log("---menuar", menuAr);

    setMenuIdAr(tempIdAr);
  }, [menuAr]);

  useEffect(() => {
    //setOutsideRender(outsideRender + 1);

    console.log("renderCount---", renderCount);
    console.log("smoothScroll.current", smoothScroll.current);
    if (smoothScroll.current) {
      try {
        smoothScroll.current.destroy();
      } catch (e) {
        console.log("scroll destroy warning");
      }
    }
    smoothScroll.current = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: function () {
        if (isSmallScreen) {
          return 80;
        } else {
          return 80;
        }
      }
    });
    //https://github.com/cferdinandi/smooth-scroll
  }, [menuIdAr, isSmallScreen, renderCount]);

  useEffect(() => {
    //console.log('debouncedBrowserHash', debouncedBrowserHash);
    if (debouncedBrowserHash) {
      console.log("push ankor to history", debouncedBrowserHash);
      //!!!!! --push or not---- window.history.pushState(null, null, "/#" + debouncedBrowserHash);
      window.history.replaceState(null, null, "/#" + debouncedBrowserHash);
    } else {
    }
  }, [debouncedBrowserHash]);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          //element.scrollIntoView({ behavior: "smooth" });
          var headerOffset = 45;
          var elementPosition = element.getBoundingClientRect().top;
          var offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [pathname, hash, key]);

  function onSpyChildrenUpdate() {}

  function onSpyUpdate(e) {
    console.log("spup", e);
    //console.log('typ', typeof e);

    try {
      if (e) {
        setBrowserHash(e.getAttribute("id"));
        //console.log('id------', e.getAttribute('id'));
      }
    } catch (e) {
      console.log("WARNING update scroll");
    }
  }

  return (
    <LinksCont {...props}>
      {
        //readyToDraw &&
        <Scrollspy
          key={"sp" + renderCount}
          items={menuIdAr}
          currentClassName="active"
          onUpdate={onSpyUpdate}
          onChildrenUpdate={onSpyUpdate}
          //offset={-5}
          offset={isSmallScreen ? -86 : -86}
        >
          {dB &&
            //menuAr[0] &&
            Object.keys(dB).map((keyName, i) => (
              <div key={keyName}>
                {dB[keyName].type !== "also" && (
                  <AnkorLink
                    topmenu={props.topMenu}
                    //href={"#" + keyName}
                    onClick={() => {
                      if (setOpen) {
                        setOpen(false);
                      }
                    }}
                  >
                    {/*<HashLink smooth to={"/#" + keyName}>
                      {dB[keyName].description || dB[keyName].type}
                    </HashLink>
                    dB[keyName].description || dB[keyName].type
                    <Link to={{ pathname: "/", hash: keyName }}>*/}
                    <Link to={"/#" + keyName}>
                      {dB[keyName].description || dB[keyName].type}
                    </Link>
                  </AnkorLink>
                )}
              </div>
            ))}
        </Scrollspy>
      }
      {/*<Link to="/banners">link</Link>
      <span>{renderCount}</span>*/}
    </LinksCont>
  );
};
