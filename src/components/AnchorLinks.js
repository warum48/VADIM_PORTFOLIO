/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import Scrollspy from "./Third-party/scrollspy";
import { useDebounce } from "./Utils";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
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
      color: var(--lightblue) ;
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
  renderCount,
  setOpen = null,
  outsideRender = 0,
  setOutsideRender = () => {},
  ...props
}) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 991px)" });
  const smoothScroll = useRef(null);
  const [menuIdAr, setMenuIdAr] = useState([]);
  const [browserHash, setBrowserHash] = useState("");
  const debouncedBrowserHash = useDebounce(browserHash, 200);

  const [menuAr, setMenuAr] = useState([]);

  useEffect(() => {
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
    tempIdAr.unshift("about");
    setMenuIdAr(tempIdAr);
  }, [menuAr]);

  useEffect(() => {
    if (smoothScroll.current) {
      try {
        smoothScroll.current.destroy();
      } catch (e) {
        //console.log("scroll destroy warning");
      }
    }
  }, [menuIdAr, isSmallScreen, renderCount]);

  useEffect(() => {
    if (debouncedBrowserHash) {
      window.history.replaceState(null, null, "/#" + debouncedBrowserHash);
    } else {
    }
  }, [debouncedBrowserHash]);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
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

  function onSpyUpdate(e) {
    try {
      if (e) {
        setBrowserHash(e.getAttribute("id"));
      }
    } catch (e) {
      //console.log("WARNING update scroll");
    }
  }

  return (
    <LinksCont {...props}>
      {
        <Scrollspy
          key={"sp" + renderCount}
          items={menuIdAr}
          currentClassName="active"
          onUpdate={onSpyUpdate}
          onChildrenUpdate={onSpyUpdate}
          offset={isSmallScreen ? -86 : -86}
        >
          {dB &&
            Object.keys(dB).map((keyName, i) => (
              <div key={keyName}>
                {dB[keyName].type !== "also" && (
                  <AnkorLink
                    topmenu={props.topMenu}
                    onClick={() => {
                      if (setOpen) {
                        setOpen(false);
                      }
                    }}
                  >
                    <Link to={"/#" + keyName}>
                      {dB[keyName].description || dB[keyName].type}
                    </Link>
                  </AnkorLink>
                )}
              </div>
            ))}
        </Scrollspy>
      }
    </LinksCont>
  );
};
