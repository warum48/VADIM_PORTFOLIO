/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import Scrollspy from "./Third-party/scrollspy";
import { useDebounce } from "./Utils";
import { isSafari } from "react-device-detect"; //
import { useMediaQuery } from "react-responsive";
import SmoothScroll from "smooth-scroll";

const LinksCont = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const Link = styled.a`
  display: block;
  padding: 4px 10px 5px 10px;
  font-size: 1rem;
  transition: all 0.5s;
  &:hover {
    /*color: ${(props) =>
      props.topmenu ? "var(--lightblue)" : "var(--darkblue)"};*/
      color: var(--lightblue) ;
  }
  color: ${(props) => (props.topmenu ? "white" : "black")};
  border-radius: 15px;
  margin: 0px 2px 4px 2px;
  cursor: pointer;
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

export const AnchorLinks = ({ dB, setOpen = null, ...props }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 991px)" });
  const smoothScroll = useRef(null);
  const [menuIdAr, setMenuIdAr] = useState([]);
  const [browserHash, setBrowserHash] = useState("");
  const debouncedBrowserHash = useDebounce(browserHash, 500);

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
    //console.log("---menuar");

    setMenuIdAr(tempIdAr);
  }, [menuAr]);

  useEffect(() => {
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
  }, [menuIdAr, isSmallScreen]);

  useEffect(() => {
    //console.log('debouncedBrowserHash', debouncedBrowserHash);
    if (debouncedBrowserHash) {
      window.history.pushState(null, null, "#" + debouncedBrowserHash);
    } else {
    }
  }, [debouncedBrowserHash]);

  function onSpyChildrenUpdate() {}

  function onSpyUpdate(e) {
    //console.log('spup', e);
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
      <Scrollspy
        items={menuIdAr}
        currentClassName="active"
        onUpdate={onSpyUpdate}
        //onChildrenUpdate={onSpyChildrenUpdate}
        //offset={-5}
        offset={isSmallScreen ? -86 : -86}
      >
        {dB &&
          Object.keys(dB).map((keyName, i) => (
            <div key={keyName}>
              {dB[keyName].type !== "also" && (
                <Link
                  topmenu={props.topMenu}
                  href={"#" + keyName}
                  onClick={() => {
                    if (setOpen) {
                      setOpen(false);
                    }
                  }}
                >
                  {dB[keyName].description || dB[keyName].type}
                </Link>
              )}
            </div>
          ))}
      </Scrollspy>
    </LinksCont>
  );
};
