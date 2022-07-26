import React from "react";
import "./Back.css";
import styled from "styled-components";
// import bg from './bbg.png'
// import nbg from './nbg.png'
import theme from "styled-theming";
import bg from "./frosty3.png";
import bg1 from "../Page5/frosty2.png";

const bColors = theme("theme", {
  light: "#fbfbfb",
  dark: "#031a9c",
});

export const bColor = theme("theme", {
  light: "#000000",
  dark: "rgba(255,255,255,255)",
});

const mbColor = theme("theme", {
  light: " #f8f8f8;",
  dark: "#031a91",
});

const Sec = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
 
  width: 100%;
  background: ${bColors};
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0.5rem 5rem 0.5rem;
    flex-direction: column;
  }
`;
const Widthu = styled.div`
  width: 1600px;
  display: flex;
  // align-items: center;
  margin: 3rem 0 0 0;
 
  justify-content: space-between;
  @media only screen and (max-width: 1700px) {
    width: 90%;
  }
  @media only screen and (max-width: 1400px) {
    width: 95%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    margin:  0 0 0;
  }
`;

const Left = styled.div`
  margin-right: 2rem;
  width: 50%;

  @media only screen and (max-width: 1100px) {
    margin-right: 0;
    width: 100%;
    padding: 0 1rem;
  }
`;

const LeftR = styled.div`
  margin-left: 2rem;
  width: 50%;

  @media only screen and (max-width: 1100px) {
    margin-left: 0;
    width: 100%;
    padding: 0 1rem;
  }
`;

const RightR = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-rightt: 2rem;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    padding: 0 1rem;
    margin-rightt: 0rem;
  }
`;

export const LeftT = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media only screen and (max-width: 1100px) {
    margin-left: 0;
    width: 100%;
    padding: 0 1rem;
    height: auto;
  }
`;

export const RightT = styled.div`
  margin-right: 2rem;
  width: 50%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-right: 0;
    padding: 0 1rem;
    height: auto;
  }
`;

const RightText = styled.div`
  width: 50%;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  margin-left: 2rem;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    padding: 0 1rem;
    margin-left: 0rem;
  }
`;

const T = styled.p`
  color: ${bColor};
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const H = styled.h1`
  color: ${bColor};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
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

`;

const Page6 = () => {
  return (
    <Sec id="rarity">
      <Widthu >
        <Left>
          <H>How Do I Determine How Frosty my Narwhals Is?</H>
          <T>
            OpenSea will show specific trait percentages of all of your Narwhal
            traits after the reveal. In the future, we plan to collaborate with
            a rarity website post mint (voted on by the community).
          </T>
        </Left>

        <RightText>
          <H>Why Mint A Frosty Narwhal?</H>
          <T>
            Aside from owning one of the coolest NFTs on the planet, Frosty
            Narwhals come with quite a few community driven perks that are found
            in the roadmap section at the top of this page. Owning a Frosty
            Narwhal also grants you access to exclusive channels in the discord.
            These channels influence the direction of the community by allowing
            members to vote on upcoming community projects, proposals, and new
            ideas. Frosty Narwhals are community driven and designed to give
            back to those who mint and hold a Frosty Narwhal.
          </T>
        </RightText>
      </Widthu>

      <Widthu style={{ alignItems: "center" }}>
        <RightT>
          <H>I’m Sold; How Much?</H>
          <T>
            Price per Frosty Narwhal will be .03 Eth. There will be a
            whitelist* pre-sale that will allow those on the list to mint up to
            a maximum of 4 during the pre-sale. *Whitelist will be grind-free
            and distributed through different methods. After the pre-sale
            closes, there will be a public mint until all 4004 Narwhals have
            found their homes!
          </T>
          {/* <H>What’s The Future Look Like?</H>
                <T>Frosty Narwhals are more than just an NFT. We will be working to build the community post launch through community voted projects, competitions, and more. To reward early holders we are planning to implement a system to breed your narwhals to create new ones while preserving traits from the originals. We will be working directly with the community on how best to implement this!</T> */}
        </RightT>

        <LeftT>
          <ImageContainer>
            <img
              src={bg1}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "12px" }}
            />
          </ImageContainer>
        </LeftT>
      </Widthu>

      <Widthu style={{margin:'3rem 0 0 0'}} id="future">
        <Left>
          <H>What’s The Future Look Like?</H>
          <T>
            The Frosty Narwhals are more than just an NFT. It will be a
            community driven project where Narwhal owners will be able to use
            their voting powers to help decide the future of the project. One of
            the main goals will be focused on giving back to those who mint and
            hold a Frosty Narwhal.
          </T>
        </Left>

        <RightText>
          {/* <H>What About Off Chain?</H>
          <T>
            10% of all Frosty Narwhal proceeds will be donated to community
            voted projects and organizations.
          </T> */}

          {/* <ImageContainer>
            <img
              src={bg}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "12px" }}
            />
          </ImageContainer>
        */}
        </RightText>
      </Widthu>
    </Sec>
  );
};

export default Page6;
