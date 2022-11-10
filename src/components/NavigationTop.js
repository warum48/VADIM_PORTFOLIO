/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { LangSwitch } from "./LangSwitch";
import { AnchorLinks } from "./AnchorLinks";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NameHome = styled.div`
  flex-grow: 100;
  color: white;
  padding: 0 1rem;
  flex-direction: column;
  align-items: flex-start;

  a,
  a:hover {
    text-decoration: none;
    text-align: left;
    color: white;
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 10px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    transition: transform 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(5px)" : "translateX(0)")};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <div className="d-block d-sm-none">
      <StyledBurger onClick={() => setOpen(!open)} open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};

export function NavigationTop({ dB }) {
  const [rerenderCount, setRerenderCount] = useState(0);

  const [open, setOpen] = React.useState(false);

  const rerenderFilter = () => {
    setRerenderCount((prevState) => prevState + 1);
  };

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      //bg="white"
      bg="dark"
      variant="dark"
      className="nav_bigblockkkkkk w-100 align-content-center"
      expanded={open}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-content-center"
      >
        <NameHome className="d-none header_nameeee d-sm-flex">
          <Link to="/">
            <div
              className="header_myname"
              css={css`
                font-size: 20px;
              `}
            >
              Vadim Rumyantsev
            </div>
            <div
              className="header_occupation"
              css={css`
                font-size: 14px;
              `}
            >
              Frontend developer
            </div>
          </Link>
        </NameHome>
        <LangSwitch />
        <Navbar.Toggle
          as={Burger}
          open={open}
          setOpen={setOpen}
          aria-controls="responsive-navbar-nav"
          className="d-block d-sm-none"
          onClick={rerenderFilter}
          css={css`
            outline: none;
            box-shadow: none;
          `}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="d-block d-sm-none">
            <AnchorLinks dB={dB} topMenu={true} setOpen={setOpen} />
            <hr className="text-white-50" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
