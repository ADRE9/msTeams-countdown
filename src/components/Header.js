import React from 'react';
import styled from "styled-components";
import { device } from '../helper/media';


const EventName = styled.h1`
  color:#fff;
    text-shadow:0 0 10px #1a70ff,
               0 0 20px #1a70ff,
               0 0 40px #1a70ff,
               0 0 80px #1a70ff,
               0 0 120px #1a70ff,
               0 0 150px #1a70ff;
   font-family: 'Inconsolata';

  @media ${device.mobileS}{
    padding-top:2rem;
    text-align:center;
    font-size:150px;

  }
  @media ${device.laptop}{
    padding-top:3rem;
    text-align:center;
    font-size:80px;
    color:#fce510;
  text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }
`;

const Header = () => {
  return (
    <EventName>
      Ambassadors Summit
    </EventName>
  )
}

export default Header
