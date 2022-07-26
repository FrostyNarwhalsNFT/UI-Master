import { ACCOUNT_UPDATE, CONTRACT_LOADED, DATA_LOADED, RATE, THEME_TOGGLER } from "../constants/action-types";



export function accountUpdate(payload) {
  // console.log(payload, "payload")
  return { type: ACCOUNT_UPDATE, payload }
};

export function contractLoaded(payload) {
  return { type: CONTRACT_LOADED, payload }
}

export function dataLoaded(payload) {
  // console.log(payload, "payload")
  return { type: DATA_LOADED, payload }
}

export function ethtodollar(payload) {
  return { type: RATE, payload }
}


export function toggleDarkTheme() {
  return { type: THEME_TOGGLER }
}
