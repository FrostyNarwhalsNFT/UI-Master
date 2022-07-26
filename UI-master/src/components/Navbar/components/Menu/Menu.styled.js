import styled from 'styled-components';
import theme from "styled-theming";

const textColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

const bg = theme("theme", {
  light: "rgba(255,255,255,0.7)",
  dark: "rgba(0,0,0,0.7)",
});  

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none; //  ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  min-height: 100vh;
  width:100%;
  text-align: center;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(2rem);
  background-color: ${bg};
  margin: 0;
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${textColor}; 
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 1rem 0;
  }
`;
