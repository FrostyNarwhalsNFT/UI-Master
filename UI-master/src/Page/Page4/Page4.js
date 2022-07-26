import React from 'react'
import styled from 'styled-components'
import img from '../Page1/whaLe.png'
import { motion } from 'framer-motion'
import theme from 'styled-theming';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  


const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(231, 239, 243, 0.4);
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        padding: 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Left = styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10%;
    @media only screen and (max-width: 768px) {
        margin-left: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;

const Right = styled(motion.div)`
      width: 30%;
      @media only screen and (max-width: 768px) {
        width: 80%;
        height: auto;
      }
`;

const T = styled.p`
    color: ${backgroundColor};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
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
    margin-top 0rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top 2rem;
      }
`;

const Page4 = () => {
  
    return (
        <Sec>
            {/* <Right
                initial={{ x: 0, y:0}}
                animate={{ x: 25, y: 0 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",}}
            >
                <img src={img} alt="" style={{width:"100%",height:"100%"}} />
            </Right> */}
            <Left>
                <H>How Do I Determine How Frosty my Narwhals Is?</H>
                <T>To start, all narwhals are exceptionally cool which makes them all frosty - but with that being said, some are naturally cooler than others depending on what they generated with. There’s a few ways to determine how frosty your narwhal is, the easiest would be your narwhals rarity score. This can be done by looking on the website and checking out the rarity list in our Discord. OpenSeas also displays property percentages as well if you want a more detailed breakdown. You can also check out your narwhal on rarity tools found (here).</T>
            </Left>
        </Sec>
    )
}

export default Page4
