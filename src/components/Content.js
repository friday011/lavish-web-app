import React from "react";
import styled from "styled-components";

import { Container } from "../UtilityStyles";

import Image from "./Image";
import Info from "./Info";

const ContentWrapper = styled.div`
  background: ${(props) => (props.theme === "dark" ? "#1c1d30" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  padding: 10rem 0;
`;

const ContentDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1rem;
  padding: 0 1rem;
`;

const Content = (props) => {
  return (
    <ContentWrapper theme={props.theme}>
      <Container>
        {props.dir === "ltr" ? (
          <ContentDiv>
            <Info
              tag={props.data.tag}
              headText={props.data.headText}
              mainText={props.data.mainText}
              btnText={props.data.btnText}
              dir={props.dir}
            />
            <Image imgSRC={props.imgSRC} />
          </ContentDiv>
        ) : (
          <ContentDiv>
            <Image imgSRC={props.imgSRC} />
            <Info
              tag={props.data.tag}
              headText={props.data.headText}
              mainText={props.data.mainText}
              btnText={props.data.btnText}
            />
          </ContentDiv>
        )}
      </Container>
    </ContentWrapper>
  );
};

export default Content;
