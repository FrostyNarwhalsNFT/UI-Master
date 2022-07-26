import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Page/Page1/Home";
import Page2 from "./Page/Page2/Page2";
import Page3 from "./Page/Page3/Page3";
import Page4 from "./Page/Page4/Page4";
import Page5 from "./Page/Page5/Page5";
import Page6 from "./Page/Page6/Page6";
import Page7 from "./Page/Page7/Page7";
import Footer from "./Page/Footer/Footer";
import theme from "styled-theming";
import Roadmap2 from "./Page/roadmap2/Roadmap2";
import styled, { ThemeProvider } from "styled-components";
import DarkThemeProvider from "./DarkThemeProvider";
import { Switch, Route } from "react-router-dom";
import BlockchainProvider from "./BlockchainProvider";

const App = () => {
  return (
    <DarkThemeProvider>
      {/* <Container> */}
      <BlockchainProvider />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
          <Page2 />

          {/* <Page3 /> */}
          {/* <Page5 /> */}
          <Page6 />
          {/* <Roadmap2 /> */}
          <Page7 />
        </Route>
        <Route path="/roadmap">
          <Roadmap2 />
        </Route>
      </Switch>
      {/* <Footer /> */}
      {/* </Container> */}
    </DarkThemeProvider>
  );
};

export default App;
