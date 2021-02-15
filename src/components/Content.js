import React,{useState} from 'react';
import styled from 'styled-components';
import {device} from '../helper/media';
import {countdown} from "../helper/countdown";
import TubeBulb from './TubeBulb';

const StyledContentDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-grow:1;
  flex-direction:column;
  width:100%;
  background-color:black;
`;

const Time = styled.h1`
color:white;
`;

const StyledClockDiv = styled.div`
  position:relative;
  max-width:100vw;
  flex-grow:1;
  display:grid;
  margin-top:1rem;
  padding:3rem 2rem 2rem 2rem;
  grid-template-rows:1;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

  @media ${device.laptop}{
  grid-gap: 2rem;
  }
`;

const StyledHeadlineDiv = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:20vh;
`;

const EventName = styled.h1`
  color:#fce510;
  text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  

  @media ${device.mobileS}{
    padding-top:2rem;
    text-align:center;
    font-size:50px;
  }
  @media ${device.laptop}{
    padding-top:5rem;
    text-align:center;
    font-size:70px;
  }
`;

const TimeDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  height:30vh;
  background-color:aliceblue;
`;

const GridItem = styled.div`
  display:flex;
  position:relative;
  flex-direction:column;
`;

const Content = () => {
  const [timeObj, setTimeObj] = useState({});

  setInterval(function () {
    setTimeObj(countdown())
  }, 1000);

  return (
    <StyledContentDiv>
      <StyledHeadlineDiv>
        <EventName>Ambassadors Summit</EventName>
      </StyledHeadlineDiv>
      <StyledClockDiv>
        <GridItem>
          <TubeBulb time={timeObj.days } unit="Days"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.hours } unit="Hours"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.mins } unit="Minutes"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.secs } unit="Seconds"/>
        </GridItem>
      </StyledClockDiv>
    </StyledContentDiv>
  )
}

export default Content;
