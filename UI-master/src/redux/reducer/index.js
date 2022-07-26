import { ACCOUNT_UPDATE, CONTRACT_LOADED, DATA_LOADED, RATE, SEAPORT, THEME_TOGGLER } from "../constants/action-types";



const initialState = {
  account: null,
  blockchainClient: null,
  mydata: null,
  theem: false,
  darkThemeEnabled:false
};

function rootReducer(state = initialState, action) {
  // console.log(action, "action")

  switch (action.type) {
    case ACCOUNT_UPDATE:
      return Object.assign({}, state, {
        account: action.payload
      });
    case CONTRACT_LOADED:
      return Object.assign({}, state, {
        contract: action.payload
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        mydata: action.payload
      });
    case RATE:
      return Object.assign({}, state, {
        rate: action.payload
      });
      case THEME_TOGGLER:
        localStorage.setItem("theme", !state.darkThemeEnabled)
        return Object.assign({}, state,{
          darkThemeEnabled:!state.darkThemeEnabled
        })
  }



  // console.log(state, "action")
  return state;
};

export default rootReducer;