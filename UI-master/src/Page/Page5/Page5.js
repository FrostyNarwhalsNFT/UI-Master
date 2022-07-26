import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './frosty2.png'
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "rgba(255,255,255,255)",
  });  

  const bColor = theme("theme", {
    light: " #FFFFFF;",
    dark: "#031a9c", 
  });

  const mbColor = theme("theme", {
    light: " #f8f8f8;",
    dark: "#031a91",
  });

const Sec = styled.section`
width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    justify-content: center;
   background: ${bColor};
    @media only screen and (max-width: 768px) {
        
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

export const Width = styled.div`
      width: 1600px;
      display: flex;
        
      align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

export const Left = styled.div`
margin-left: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width:50%;
        
    @media only screen and (max-width: 1100px) {
      margin-left: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

export const Right = styled.div`

      margin-right: 2rem;
      width:50%;
      @media only screen and (max-width: 1100px) {
        width: 100%;
        padding: 0 1rem;
        height: auto;
        
        margin-right: 0;
      }
`;

const T = styled.p`
    color: ${backgroundColor};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const H = styled.h1`
    color: ${backgroundColor};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const ImageContainer = styled.div`
      width: 32rem;
      height: 30rem;
      @media only screen and (max-width: 510px) {
        width: 25rem;
        height: 24rem;
      }
      @media only screen and (max-width: 380px) {
        width: 25rem;
        height: 22rem;
      }
`

const Page5 = () => {
  
    return (
        <Sec id="rarity">

          <Width>

          

            <Right>

            <H>What About Off Chain?</H>
            <T>10% of all Frosty Narwhal proceeds will be donated to community voted projects and organizations.</T>

            </Right>

            <Left>
                {/* <H>Why Mint A Frosty Narwhal?</H>
                <T>Aside from owning one of the coolest NFTs on the planet, Frosty Narwhals come with quite a few community driven perks that are found in the roadmap section at the top of this page. Owning a Frosty Narwhal also grants you access to exclusive channels in the discord. These channels influence the direction of the community by allowing members to vote on upcoming community projects, proposals, and new ideas. Frosty Narwhals are community driven and designed to give back to those who mint and hold a Frosty Narwhal. This will be done through community raffles, prizes, competitions, giveaways and more!</T> */}
                <ImageContainer>

                  <img src={bg} alt='' style={{width:'100%',height:'100%',borderRadius:'12px'}} />

                </ImageContainer>
            </Left>

          </Width>
          
        </Sec>
    )
}

export default Page5
