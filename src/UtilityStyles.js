import React from "react";
import styled from "styled-components";

const MHeading = styled.div`
  font-size: 2rem;
  margin: 0 0.5rem;
`;

const Cont = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
`;

const RedP = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: orangered;
`;

const WLHeading = styled.div`
  font-size: 3rem;
`;

const Custombtn = styled.button`
  background: #2570f6;
  color: #fff;
  padding: 0.75rem 3rem;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  align-self: ${props => props.dir === "ltr" ? "Flex-start" : "flex-end"};
  cursor: pointer;
`;

export const Container = (props) => {
  return <Cont>{props.children}</Cont>;
};

export const MediumHeading = (props) => {
  return <MHeading>{props.children}</MHeading>;
};

export const WhiteLargeHeading = (props) => {
  return <WLHeading>{props.children}</WLHeading>;
};

export const RedPara = (props) => {
  return <RedP>{props.children}</RedP>;
};

export const CustomButton = (props) => {
  return <Custombtn dir={props.dir}>{props.children}</Custombtn>;
};
