import React,{useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import TubeBulb from './TubeBulb';
import {countdown} from "../helper/countdown";
import { device } from '../helper/media';


const Body = styled.div`
  position:relative;
  width:100%;
  min-height:100vh;
  background-color:black;
  padding:0;
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const StyledWrapperDivTop = styled.div`
  width:100%;
`;

const StyledWrapperDivBottom = styled.div`
  flex-grow:1;
  width:100%;
`;

const Grid = styled.div`
  display:grid;
  padding:2rem;
  grid-template-columns:1fr;
  grid-gap:2rem; 
  grid-template-rows:repeat(auto-fit,1fr);

  @media ${device.laptopL}{
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    grid-template-rows:1;
    grid-gap:2rem; 
  }
`;

const GridItem = styled.div`
  height:100%;
  width:100%;
`;

const App = () => {

  const [timeObj, setTimeObj] = useState({});

  setInterval(function () {
    setTimeObj(countdown())
  }, 1000);


  return (
    <Body>
      <StyledWrapperDivTop>
        <Header />
      </StyledWrapperDivTop>
      <StyledWrapperDivBottom>
        <Grid>
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
        </Grid>
      </StyledWrapperDivBottom>
    </Body>
  )
}

export default App
