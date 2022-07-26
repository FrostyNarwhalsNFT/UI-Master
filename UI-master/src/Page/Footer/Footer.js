import React from 'react'
import styled from 'styled-components';

const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const H= styled.h1`
    color: #FFF;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Sec = styled.footer`
    height: 5rem;
    width: 100%;
    // display: grid;
    // place-items: center;
    padding: 0 2rem;
    background: red;
    @media only screen and (max-width: 768px) {
        padding: 0 2rem;
       
      }
`;

const Footer = () => {
    return (
        <Sec>
            <T>© 2021 Frosty Narwhals </T>
        </Sec>
    )
}

export default Footer
