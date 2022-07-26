import React, { useState } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import styled from "styled-components";
import logo from "./logo.png";
// import twitter from '../../../page/Footer/twitter.svg'
// import opensea from '../../../page/Footer/opensea.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";

const textColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 30%;
`;

const Link1 = styled(Link)`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  text-decoration: none;
  color: #fff;
  position: absolute;
  left: 2rem;
  top: -0.3rem;
  width: 3rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
  align-items: center;
`;

const Img = styled.img`
  width: 3rem;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

const T = styled.p`
  color: ${textColor};
  font-weight: 500;
  font-size: 16px;
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const H = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link1 to="home" spy={true} smooth={true}>
        <img src={logo} alt="Logo" style={{ width: "100%", height: "100%" }} />
      </Link1>

      <MenuItems>
        <a href="/" onClick={() => setOpen(false)} style={{ padding: "0" }}>
          Home
        </a>
        <a style={{ padding: "0" }}>
          <H to="learn" spy={true} smooth={true} onClick={() => setOpen(false)}>
            Learn
          </H>
        </a>
        <a style={{ padding: "0" }}>
          <H
            to="rarity"
            spy={true}
            smooth={true}
            onClick={() => setOpen(false)}
          >
            {" "}
            Rarity
          </H>
        </a>
        <a style={{ padding: "0" }}>
          <H to="faq" spy={true} smooth={true} onClick={() => setOpen(false)}>
            FAQ
          </H>
        </a>
        <a
          href="/roadmap"
          style={{ padding: "0" }}
          onClick={() => setOpen(false)}
        >
          Roadmap
        </a>
      </MenuItems>

      <Right>
        {/* <Flex>
          <Img src={twitter} alt="" />
          <Img src={opensea} alt="" />
        </Flex> */}
        <T>Forst Narwals All Right Reserved.</T>
      </Right>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
