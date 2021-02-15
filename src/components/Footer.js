import React from 'react';
import styled from "styled-components";

const StyledFooterDiv = styled.div`
  display:flex;
  width:100%;
  height:5vh;
  background-color:black;
  justify-content:center;
  align-items:center;
`;

const StyledCopyright = styled.p`
  color:white; 
  font-family: 'Acme', sans-serif;
  font-weight:200;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <StyledCopyright>
        Copyrights ADRE9
      </StyledCopyright>
    </StyledFooterDiv>
  )
}

export default Footer;
