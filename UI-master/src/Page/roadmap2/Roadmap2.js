import React, { useState } from "react";
import "./Css.css";
import styled from "styled-components";
import theme from "styled-theming";
// import tank from './tank.png'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiHomeassistant } from "react-icons/si";
import { IoIosPodium } from "react-icons/io";
import { SiAzuredataexplorer } from "react-icons/si";
import { SiZig } from "react-icons/si";
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
// import { TOGGLE_DARKTHEME } from "../../redux/actions";
import bgg from "./d.gif";
import nbgg from "./n.gif";
import { toggleDarkTheme } from "../../redux/actions";
import { H } from "../Page2/Page2";
import logo from "../../components/Navbar/logo.png";

// import videoD from '../Page7/dayw.gif'
// import videoN from '../Page7/nightw.gif'
const backgroundImagePage7 = theme("theme", {
  light: bgg,
  dark: nbgg,
});

const SubText = theme("theme", {
  light: "#000000",
  dark: "#FFFFFF",
});

const backgroundColor = theme("theme", {
  light: "#0d496f", //"#064571",
  dark: "#040b1e",
});

const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 8rem 0;
  background-image: url(${backgroundImagePage7});
  background-color: ${backgroundColor};
  background-repeat: no-repeat;

  background-size: 100% auto;

  @media only screen and (max-width: 1210px) {
    padding: 12rem 0 8rem 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 5rem 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const T = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.3rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Ts = styled.p`
  color: ${SubText};
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0 0 2rem 0;
  padding: 0 2rem;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
    padding: 0 1rem;
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
const Icon = styled.div`
  // width: 3.4rem;
  // height: 3.4rem;
  // margin: 0.05rem 0 0 0.2rem;
`;

const Roadmap2 = () => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);

  return (
    <Sec id="roadmap" style={{ backdropColor: "#FEFDFD" }}>
      <div style={{ backdropColor: "#FEFDFD" }}>
        <H style={{ textAlign: "center" }}>ROADMAP</H>
        <Ts>
          10% of all Frosty Narwhal proceeds will be donated to community voted
          projects and organizations
        </Ts>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#03157f", color: "#FFF" }}
          contentArrowStyle={{ borderRight: "7px solid #FEFDFD" }}
          // date="Phase 01"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={
            <Icon>
              <img
                src={logo}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Icon>
          }
        >
          {/* <h3 className="vertical-timeline-element-title">0%</h3> */}
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 1
          </h4>
          <T>Frosty Narwhals Public Sale Initiated</T>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#03157f", color: "#FFF" }}
          // date="Phase 02"
          iconStyle={{ background: "#FFBF00", color: "#fff" }}
          // icon={<IoIosPodium />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 2
          </h4>
          <T>Community Roadmap Voting Initiated</T>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#03157f", color: "#FFF" }}
          // date="Phase 04"
          iconStyle={{ background: "#FFBF00", color: "#fff" }}
          // icon={<SiZig />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 3
          </h4>
          <T>Frosty Narwhals Merch Store Released</T>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#03157f", color: "#FFF" }}
          // date="Phase 03"
          iconStyle={{ background: "#FFBF00", color: "#000000" }}
          // icon={<SiAzuredataexplorer />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 4
          </h4>
          <T>Donations to community voted projects and organizations</T>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#03157f", color: "#FFF" }}
          contentArrowStyle={{ borderRight: "7px solid #FEFDFD" }}
          // date="Phase 01"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={
            <Icon>
              <img
                src={logo}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Icon>
          }
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 5
          </h4>
          <T>Community voted Generation 2 discussions</T>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<Icon>
        <img src={logo} alt="" style={{height:"100%",width:"100%"}}/>
    </Icon>}
  /> */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            display: "none",
            background: "#03157f",
            color: "#FFF",
          }}
          // date="Phase 05"
          iconStyle={{ background: "	#228B22", color: "#000000" }}
          icon={
            <Icon>
              <img
                src={logo}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </Icon>
          }
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4
            style={{ fontSize: "1.4rem" }}
            className="vertical-timeline-element-subtitle"
          >
            Milestone 5
          </h4>
          <T>Community voted Generation 2 discussions</T>
        </VerticalTimelineElement> */}
      </VerticalTimeline>

      <ModeButton
        onChange={() => dispatch(toggleDarkTheme())}
        checked={darkThemeEnabled}
        size={80}
      />
    </Sec>
  );
};

export default Roadmap2;
