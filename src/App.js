import React from "react";
import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";
import Content from "./components/Content";

import data from "./data.json";
import svgOne from "./images/svg-1.svg";
import svgTwo from "./images/svg-2.svg";
import svgSeven from "./images/svg-7.svg";
// import svgFour from "./images/svg-4.svg";

const AppWrapper = styled.div`
  font-family: "Lato", sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Content theme="dark" data={data[0]} imgSRC={svgOne} dir="ltr" />
      <Content theme="light" data={data[1]} imgSRC={svgSeven} dir="rtl" />
      <Content theme="dark" data={data[2]} imgSRC={svgTwo} dir="ltr" />
    </AppWrapper>
  );
};

export default App;
