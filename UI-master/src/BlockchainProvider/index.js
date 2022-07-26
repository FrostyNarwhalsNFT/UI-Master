import React, { useEffect } from "react";
import Web3 from "web3";
import abi from "./abi/abis.json";
import { useWallet } from "use-wallet";

import { accountUpdate, contractLoaded, ethtodollar } from "../redux/actions";
import { connect, useSelector } from "react-redux";
import config from "./config";

function BlockchainProvider(props) {
  const { ethereum, account } = useWallet();
  useEffect(() => {}, []);

  useEffect(() => {
    init();
  }, [ethereum]);

  useEffect(() => {
    if (account) {
      props.dispatch(accountUpdate(account));
    }
  }, [account]);

  const init = () => {
    //const contractAddr = Config.CONTRACT_ADDRESS
    const web3 = new Web3(ethereum);
    try {
      //   account(web3);

      const SimpleContract = new web3.eth.Contract(
        abi,
        config.CONTRACT_ADDRESS
      );
      props.dispatch(contractLoaded(SimpleContract));
      console.log(SimpleContract, "contract");
      props.dispatch(ethtodollar(props.eth));
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
}
const mapStateToProps = function (state) {
  return {};
};

export default connect(mapStateToProps)(BlockchainProvider);
