import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Dark.css";
// import bg from './bg.gif'
import whitelist from "../../BlockchainProvider/whitelist";
// import blue from "./main.webp";
import videoF from "./main.gif";
import { motion } from "framer-motion";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
// import { TOGGLE_DARKTHEME } from "../../redux/actions";
import theme from "styled-theming";
import { BsBoxArrowUp } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import twi from "./twitter.png";
import dis from "./discord.png";
import open from "./opensea.svg";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { toggleDarkTheme } from "../../redux/actions";
import { useWallet } from "use-wallet";
import {
  getMerkleProofHash,
  getRootHash,
} from "../../BlockchainProvider/merkle";
import Web3 from "web3";
import config from "../../BlockchainProvider/config";

const bColor = theme("theme", {
  light: "#808ddc",
  dark: "#041a9a",
});

// const heroImg = theme("theme", {
//   light: blue,
//   dark: blue,
// });

const bg = theme("theme", {
  light: "#000000",
  dark: "#FFFFFF",
});

const hu = theme("theme", {
  light: "#FFFFFF",
  dark: "#000000",
});

const HomePage = styled.section`
  display: flex;
  background-color: ${bColor};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  z-index: 1;
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 4rem 0 0 0;
  @media only screen and (max-width: 768px) {
    min-height: 50rem;
    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    background-size: auto 100%;
    flex-direction: column;
  }
`;

const Width = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1700px) {
    width: 98%;
  }
  @media only screen and (max-width: 1500px) {
    padding: 4rem 0 2rem 0;
  }
  @media only screen and (max-width: 1225px) {
    padding: 12rem 0 2rem 0;
  }
  @media only screen and (max-width: 786px) {
    padding: 4rem 0 2rem 0;
  }
`;

const HeroImg = styled(motion.div)`
  width: 40rem;
  height: 27rem;
  position: relative;
  border: 1px solid black;
  border-radius: 10px;

  // @media only screen and (max-width: 1400px) {
  //   width: 30rem;
  //   height: 22rem;
  // }
  @media only screen and (max-width: 768px) {
    width: 20rem;
    height: 14rem;
  }
`;

const T = styled.p`
  color: ${bg};
  font-weight: 500;
  font-size: 1.3rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Center = styled.div`
        width: auto;
        height: auto;
        display: grid;
        place-items: center;
        padding: 1rem 2.5rem 0 2.5rem;                                                                                    rem;
        // background-color: rgba(135, 206, 235, .4);  
        // backdrop-filter: blur(5px);
         border-radius: 0.5rem;
        // border: 1px solid black;
      @media only screen and (max-width: 800px) {
        padding: 1rem 4rem 0 4rem;
      }
      @media only screen and (max-width: 500px) {
        padding: 1rem 1rem 0 1rem;
        width: 99%;
      }
`;

const Button = styled(motion.button)`
  background: #fad129;

  color: #000000;
  border: none;
  font-size: 3.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.3rem 3rem;
  border-radius: 2.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media only screen and (max-width: 1400px) {
    font-size: 3.6rem;
    padding: 0.3rem 2rem;
    border-radius: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0.3rem 1rem;
    border-radius: 1.2rem;
  }
`;

const ModeButton = styled(DarkModeToggle)`
  position: fixed;
  bottom: 10%;
  left: 5rem;
  z-index: 9999;
  @media only screen and (max-width: 768px) {
    bottom: 3rem;
    left: 2rem;
  }
`;
const ShowButton = styled(Link)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #fad129;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
  position: fixed;
  height: 4rem;
  width: 3rem;
  border-radius: 0.5rem;
  transition: 0.5s linear;
  right: 2rem;
  bottom: 5rem;
  display: grid;
  place-items: center;
  z-index: 9999;
`;

const IconContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Icon1 = styled(motion.a)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;

  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
  @media only screen and (max-width: 350px) {
  }
`;

const IconM = styled(motion.a)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0 1rem;
  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
  @media only screen and (max-width: 350px) {
  }
`;

const Icon2 = styled(motion.a)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;

  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
  @media only screen and (max-width: 350px) {
  }
`;

const Leftu = styled.div`
        
       
          display: flex;
        align-items: center;
         background-color: #9fb5fe;
        // backdrop-filter: blur(10px);
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 2rem;
        margin-right: 1rem;
        }
        @media only screen and (max-width: 700px) {
          margin-right: 0rem;
        }
        @media only screen and (max-width: 500px) {
          padding: 1rem;
          width: 99%;
        }
        
`;

const Rightu = styled(motion.div)`
   
        
        
          display: flex;
   flex-direction: column;
        align-items: center;
         background-color: #9fb5fe;  
        // backdrop-filter: blur(10px);
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 2rem;
        margin-left: 1rem;
        }
        @media only screen and (max-width: 700px) {
          margin-left: 0rem;
          margin: 1rem  0 0
        }
        @media only screen and (max-width: 500px) {
          padding: 1rem ;
          width: 99%;
        }
`;

const Hu = styled.h2`
  color: ${hu};
  font-weight: bold;
  font-size: 30px;

  @media only screen and (max-width: 768px) {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

const Upper = styled.div`
  @media only screen and (max-width: 768px) {
  }
`;

const Buttonu = styled(motion.button)`
  background: #fad129;
  color: #000000;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 2.5rem;
  margin: 1rem 0 0 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1400px) {
    font-size: 1.6rem;
    padding: 0.3rem 2rem;
    border-radius: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 1.2rem;
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 2rem 0 0 0;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Home = () => {
  const wallet = useWallet();
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.contract);

  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [noOfNFT, setNoOfNFT] = useState(1);
  const [isWhitelisted, setWhitelisted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [maxNFTMint, setMaxNFTMint] = useState(0);
  const [myMintedNFTs, setMyMintedNFTs] = useState(0);
  const [isMintEnable, setMintEnable] = useState();
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setprice] = useState(0);

  useEffect(() => {
    if (contract) {
      loadData();
    }
  }, [contract]);

  const loadData = async () => {
    let _price = await contract.methods.price().call();
    let _maxFrostyNarwhalsMintPerWallet = await contract.methods
      .maxFrostyNarwhalsMintPerWallet()
      .call();
    let myMinted = 0;
    if (wallet.account) {
      myMinted = await contract.methods.mintedRecord(wallet.account).call();
    }

    let _isMintEnable = false;
    if (config.IS_WHITELISING_OPEN) {
      _isMintEnable = await contract.methods.whitelistSaleIsActive().call();
    } else {
      _isMintEnable = await contract.methods.saleIsActive().call();
    }

    let _totalSupply = await contract.methods.totalSupply().call();
    setTotalSupply(_totalSupply);

    setMintEnable(_isMintEnable);
    setMyMintedNFTs(myMinted);
    let maxMint = _maxFrostyNarwhalsMintPerWallet - myMinted;
    setMaxNFTMint(maxMint);
    setprice(_price);
    setTotalCost(_price * noOfNFT);
  };
  const handleMint = async () => {
    if (Number(noOfNFT) === 0) {
      alert("Can't Mint Zero NFTs");
      return;
    }
    setLoading(true);
    // const proof = getMerkleProofHash(wallet.account);
    // if (proof.length > 0) {
    // } else {
    //   alert("You are not whitelisted");
    //   return;
    // }

    if (config.IS_WHITELISING_OPEN) {
      try {
        const merkleProof = getMerkleProofHash(wallet.account);
        await contract.methods.whitelistMint(noOfNFT, merkleProof).send({
          from: wallet.account,
          value: totalCost.toString(),
        });
      } catch (err) {
        console.error("error", err);
      }
    } else {
      try {
        await contract.methods.publicMint(noOfNFT).send({
          from: wallet.account,
          value: totalCost.toString(),
        });
      } catch (err) {
        console.error("error", err);
      }
    }
    setLoading(false);
  };

  const showButtonTop = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 700) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    wallet.connect();
  }, []);

  useEffect(() => {
    setTotalCost(noOfNFT * price);
  }, [noOfNFT]);

  useEffect(() => {
    showButtonTop();
    // adding the event when scroll change background
    window.addEventListener("scroll", showButtonTop);
  });

  useEffect(() => {
    console.log(darkThemeEnabled, "theme");
  }, [darkThemeEnabled]);

  useEffect(() => {
    if (wallet.account) {
      checkMyWhitelist();
    }
  }, [wallet.account]);

  const checkMyWhitelist = () => {
    const isFound = whitelist.some(
      (addr) => addr.toLowerCase() === wallet.account.toLowerCase()
    ); // true
    setWhitelisted(isFound);
  };

  const renderButton = () => {
    if (wallet.status == "connected") {
      if (loading) {
        return <Buttonu type="button">Loading ...</Buttonu>;
      } else if (isMintEnable === false) {
        return (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              disabled
              onClick={() => {}}
            >
              Mint Not Open
            </Buttonu>
          </div>
        );
      } else if (totalSupply === config.MAX_SUPPLY) {
        return (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              disabled
              onClick={() => {}}
            >
              Sold Out
            </Buttonu>
          </div>
        );
      } else if (config.IS_WHITELISING_OPEN && !isWhitelisted) {
        return (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              disabled
              onClick={() => {}}
            >
              You are not whitelisted
            </Buttonu>
          </div>
        );
      } else {
        return (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              onClick={() => {
                handleMint();
              }}
            >
              MINT
            </Buttonu>
          </div>
        );
      }
    } else {
      return (
        <Buttonu
          onClick={() => {
            wallet.connect();
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
          whileTap={{ scale: 0.7 }}
          type="button"
        >
          CONNECT
        </Buttonu>
      );
    }
  };

  const MintingPanel = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Upper>
            <FaPlusCircle
              size="1.4rem"
              className="iconR"
              style={{ color: "#fad129", cursor: "pointer" }}
              onClick={() => {
                const totalNFT = parseInt(noOfNFT) + 1;
                if (noOfNFT < 10) {
                  setNoOfNFT(totalNFT);
                }
              }}
            />

            <input
              placeholder="NFT"
              value={noOfNFT}
              style={{
                width: "12rem",
                height: "3rem",
                borderRadius: "0.5rem",
                border: "none",
                fontSize: "1.5rem",
                paddingLeft: "0.5rem",
              }}
              onChange={(e) => {
                console.log(!isNaN(e.target.value));
                if (!isNaN(e.target.value)) {
                  setNoOfNFT(e.target.value);
                  // console.log(!isNaN(e.target.value));
                  // isNaN(e.target.value)
                  //   ? setNoOfNFT(parseInt(e.target.value))
                  //   : "";
                }
              }}
              type="number"
            />
            <FaMinusCircle
              size="1.4rem"
              className="iconL"
              style={{ color: "#fad129", cursor: "pointer" }}
              onClick={() => {
                if (noOfNFT > 1) {
                  setNoOfNFT(noOfNFT - 1);
                }
              }}
            />
            {/* <FaPlusCircle
              size="1.4rem"
              className="iconR"
              style={{ color: "#fad129", cursor: "pointer" }}
              onClick={() => {
                const totalNFT = parseInt(noOfNFT) + 1;
                if (noOfNFT < 10) {
                  setNoOfNFT(totalNFT);
                }
              }}
            /> */}
          </Upper>
          {/* <Smallu>
            <T style={{ padding: "0 0 0 0" }}>Minting Cost</T>
            <Hu style={{ margin: "0" }}>
              {Web3.utils.fromWei(totalCost.toString())} ETH
            </Hu>

            <T style={{ marginTop: 5 }}>Price Per NFT</T>
            <Hu style={{ margin: "0" }}>
              {Web3.utils.fromWei(price.toString())} ETH
            </Hu>
          </Smallu> */}
        </div>

        {price > 0 ? renderButton() : null}
        {wallet.account ? (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              disabled
              onClick={() => {
                wallet.connect();
              }}
            >
              {wallet.account.slice(0, 10)}...
            </Buttonu>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Buttonu
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              disabled
              onClick={() => {
                wallet.connect();
              }}
            >
              Connect Wallet
            </Buttonu>
          </div>
        )}
      </>
    );
  };

  const renderMintPanel = () => {
    return <MintingPanel />;
  };

  return (
    <HomePage id="home">
      <Width>
        <Center>
          <HeroImg

          // initial={{ x: 0, y: 0 }}
          // animate={{ x: 0, y: -25 }}
          // transition={{
          //   duration: 1,
          //   repeat: Infinity,
          //   repeatType: "reverse",
          // }}
          >
            <img
              src={videoF}
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "0.6rem" }}
            />
            {/* <video preload="yes" autoPlay loop muted className="video" type='video/mp4' playsinline>
              <source src={videoF} type="video/mp4" />
            </video> */}
          </HeroImg>

          {window.ethereum ? (
            <Button
              whileHover={{
                scale: 1.1,
                marginTop: 5,
                boxShadow: "0 0 25px 	#000",
              }}
              whileTap={{ scale: 0.7 }}
              type="button"
              style={{ marginTop: "10px" }}
              onClick={() => {
                window.open("https://metamask.io/download/", "_blank");
              }}
            >
              Install Wallet
            </Button>
          ) : (
            <Button
              whileHover={{
                scale: 1.1,
                marginTop: 5,
                boxShadow: "0 0 25px 	#000",
              }}
              style={{ marginTop: "10px" }}
              whileTap={{ scale: 0.7 }}
              type="button"
              onClick={() => {
                window.open("https://metamask.io/download/", "_blank");
              }}
            >
              Install Wallet
            </Button>
          )}
          <IconContainer>
            <Icon1
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px #000" }}
              whileTap={{ scale: 0.7 }}
              href="https://twitter.com/FrostyNarwhals"
              target="_blank"
            >
              <img src={twi} alt="" style={{ width: "100%", height: "100%" }} />
            </Icon1>

            <IconM
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px #000" }}
              whileTap={{ scale: 0.7 }}
              href="https://u/FrostyNarwhalsNFT"
              target="_blank"
            >
              <img
                src={open}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </IconM>

            <Icon2
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px 	#000" }}
              whileTap={{ scale: 0.7 }}
              href="https://discord.gg/eaPJebN7HC"
              target="_blank"
            >
              <img src={dis} alt="" style={{ width: "100%", height: "100%" }} />
            </Icon2>
          </IconContainer>
        </Center>

        <Flex>
          <Leftu>
            {/* <div>
              <T>SOLD OUT</T>
              <T>Max 10</T>
            </div> */}

            <div>
              <T style={{ padding: "0 0 0 0" }}>Minting Cost</T>
              <Hu style={{ margin: "0" }}>
                {Web3.utils.fromWei(totalCost.toString())} ETH
              </Hu>

              <T style={{ marginTop: 5 }}>Price Per NFT</T>
              <Hu style={{ margin: "0" }}>
                {Web3.utils.fromWei(price.toString())} ETH
              </Hu>
              {wallet.account ? (
                <>
                  <T style={{ padding: "0 0 0 0" }}>Your Mint Balance</T>
                  <Hu style={{ margin: "0" }}>{myMintedNFTs.toString()}</Hu>

                  <T style={{ padding: "0 0 0 0" }}>You can Mint </T>
                  <Hu style={{ margin: "0" }}>{maxNFTMint}</Hu>
                </>
              ) : null}
            </div>
          </Leftu>

          <Rightu>{renderMintPanel()}</Rightu>
        </Flex>
      </Width>

      <ModeButton
        onChange={() => dispatch(toggleDarkTheme())}
        checked={darkThemeEnabled}
        size={80}
      />

      {/* <video autoPlay loop muted className="video">
            
             <source src={darkThemeEnabled? videoN : videoD} type="video/mp4"/> 
            </video> */}

      {showButton ? (
        <ShowButton type="button" to="home" spy={true} smooth={true}>
          <BsBoxArrowUp size="2rem" />
        </ShowButton>
      ) : null}
    </HomePage>
  );
};

export default Home;
