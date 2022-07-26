import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './frosty1.png'
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  const bColor = theme("theme", {
    light: "#fbfbfb",
    dark: "#041a9a",
  });  

const Sec = styled.section`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0 2rem 0;
    background-color: ${bColor};
 
    @media only screen and (max-width: 768px) {
        
        padding: 1rem 0 0 0;
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

const Left = styled.div`
margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      width: 48%;
    @media only screen and (max-width: 1100px) {
      margin-left: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
        margin: 2rem 0 0 0;
      }
`;

const Right = styled.div`
      width: 48%;

      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // flex-direction: column;
      @media only screen and (max-width: 1100px) {
        width: 100%;
        height: auto;
        
        padding: 0 1rem;
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

export const H = styled.h1`
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
        height: 20rem;
      }
      // @media only screen and (max-width: 380px) {
      //   width: 25rem;
      //   height: 22rem;
      // }
`

const Page2 = () => {
  
    return (
        <Sec id="learn">

            <Width>
            
        
            <Right>

              <ImageContainer>

                <img src={bg} alt='' style={{width:'100%',height:'100%',borderRadius:'12px'}} />

              </ImageContainer>

                {/* <H>How Do I Determine How Frosty my Narwhals Is?</H>
                <T>There’s a few ways to determine how rare your narwhal is, the easiest would be your narwhals rarity score. This can be viewed by visiting the Discord (here) and checking out our localized rarity list. OpenSeas also displays property percentages as well if you require a more detailed breakdown.</T> */}

            </Right>

            <Left>

                <H>What Are Frosty Narwhals?</H>
                <T>Frosty Narwhals are 4004 unique procedurally generated narwhals from a pool of over 100 different hand-drawn assets. These narwhals have a variety of different traits such as colors, horn types, handheld items and more which allow for over 1 million unique combinations. Combine that with an awesome community driven project and you get a really cool outcome, so cool in fact, they’re frosty.</T>

            </Left>

            {/* <Right>
                <img src={img} alt="" style={{width:"100%",height:"100%"}} />
            </Right> */}
            </Width>
        </Sec>
    )
}

export default Page2
