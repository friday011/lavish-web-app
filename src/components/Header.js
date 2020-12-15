import React from "react";
import styled from "styled-components";

import { MediumHeading, Container } from "../UtilityStyles";

const HeadWrapper = styled.div`
  background: #1c1d30;
  color: #fff;
`;

const Head = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const NavUL = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLI = styled.li`
  margin: 0 1rem;
  padding: 1rem 0;
`;

const Header = () => {
  return (
    <HeadWrapper>
      <Container>
        <Head>
          <LogoDiv>
            <i className="fas fa-fingerprint fa-2x"></i>
            <MediumHeading>
              <p>LAVISH</p>
            </MediumHeading>
          </LogoDiv>
          <nav>
            <NavUL>
              <NavLI>Home</NavLI>
              <NavLI>Services</NavLI>
              <NavLI>Products</NavLI>
            </NavUL>
          </nav>
        </Head>
      </Container>
    </HeadWrapper>
  );
};

export default Header;
