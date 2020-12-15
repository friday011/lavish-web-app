import React from "react";
import styled from "styled-components";

import {
  Container,
  RedPara,
  WhiteLargeHeading,
  CustomButton,
} from "../UtilityStyles";

const InfoWrapper = styled.div`
  height: 100%;
  text-align: ${props => props.dir === "ltr" ? "left" : "right"}
`;

const InfoDiv = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Info = (props) => {
  return (
    <InfoWrapper dir={props.dir}>
      <Container>
        <InfoDiv>
          <RedPara>
            <p>{props.tag}</p>
          </RedPara>
          <WhiteLargeHeading>
            <p>{props.headText}</p>
          </WhiteLargeHeading>
          <p>{props.mainText}</p>
          <CustomButton dir={props.dir}>{props.btnText}</CustomButton>
        </InfoDiv>
      </Container>
    </InfoWrapper>
  );
};

export default Info;
