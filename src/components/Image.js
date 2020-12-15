import React from "react";
import styled from "styled-components";

const Img = styled.div`
  img {
    height: 30rem;
  }
`;

const Image = (props) => {
  return (
    <Img>
      <img src={props.imgSRC} alt="" />
    </Img>
  );
};

export default Image;
