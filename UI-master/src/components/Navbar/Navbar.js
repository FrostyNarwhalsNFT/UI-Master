import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import mlogo from "./logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";
import { useSelector, useDispatch } from "react-redux";
import { Link as UpdatedLink } from "react-router-dom";

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Link1 = styled(Link)`
  display: flex;
  margin: 0 3rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

}

`;

const Link2 = styled(Link)`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  text-decoration: none;
  color: ${backgroundColor} !important;
  cursor: pointer;
  font-family: "Montserrat", sans-serif !important;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Link3 = styled(UpdatedLink)`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  text-decoration: none;
  color: ${backgroundColor} !important;
  cursor: pointer;
  font-family: "Montserrat", sans-serif !important;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const H1 = styled.h1`
  color: ${backgroundColor};
`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const PC = styled.div`
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={
        navbar ? (darkThemeEnabled ? "navActiveLight" : "navActiveDark") : "nav"
      }
    >
      <PC>
        <Link2  onClick={() => {
              window.location.pathname = "/";
            }} spy={true} smooth={true}>
          <img
            src={logo}
            alt="Logo"
            className={navbar ? "LogoActive" : "Logo"}
          />
          <H1 className={navbar ? "Hactive" : "H"}>Frosty Narwhals</H1>
        </Link2>
      </PC>
      <Mobile>
        <Link2  onClick={() => {
              window.location.pathname = "/";
            }} spy={true} smooth={true} style={{ marginRight: "0" }}>
          <img src={mlogo} alt="mlogo" className="LogoB" />
        </Link2>
      </Mobile>
      <PC>
        <ul className="list">
          <Link2 to="learn" spy={true} smooth={true} offset={-80}>
            Learn
          </Link2>
          <Link2 to="future" spy={true} smooth={true} offset={-80}>
            Future
          </Link2>
          <Link2 to="faq" spy={true} smooth={true} offset={-80}>
            FAQ
          </Link2>
          <Link2
            onClick={() => {
              window.location.pathname = "/roadmap";
            }}
          >
            Roadmap
          </Link2>
        </ul>
      </PC>

      <Mobile ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </Mobile>
    </nav>
  );
};

export default Navbar;
