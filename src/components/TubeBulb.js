import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { device } from "../helper/media";
import tube from '../assets/Asset.png';
import mesh from '../assets/6407bcee264ca272199c4f8c1bbe288e.png'

const colors = {
  innerGLow: "#ffb510",
  text: "#fce510",
  outerGlow:"#fb0000"
}

const TopDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const LowerDiv = styled.div`
display:flex;
position:relative;
flex-direction:row;
width:100%;

`;

const Unit = styled.h1`
color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
    font-family: 'Inconsolata';
    font-size:80px;

    @media ${device.laptopL}{
      font-size:35px;
    }
`;

const TubeWrapperLeft = styled.div`
position:relative;
flex-grow:1;
`;

const TubeWrapperRight = styled.div`
position:relative;
flex-grow:1;
`;

const TubeImg = styled.img`
position:relative;
z-index:5;
width:100%;
`;

const DigitDiv = styled.div`
  position:absolute;
  z-index:2;
  top:23% ;
  left:50% ;
  transform:translate(-50%,-35%);
  
`;


const flicker = keyframes`
  0%{
    color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }

  10%{
    color:#333;
    text-shadow:none;
  }

  13%{
    color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }
  
  25% {
    color:#333;
    text-shadow:none;
  }

  50%{
    color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }

  80%{
    color:#333;
    text-shadow:none;
  }

  100% {
    color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }
`;


const Digit = styled.h1`
color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
font-size:350px;
font-family: 'Roboto', sans-serif;

@media ${device.laptopL}{
  font-size:130px;
}
`;

const DigitSpan = styled.span`
  animation: ${flicker} 2s ease-in-out ;
`;

const MeshImg = styled.img`
  position:absolute;
  top:20%;
  left:10%;
  z-index:3;
  width:80%;
`;

const TubeBulb = (props) => {

  var leftDigit = Math.floor(props.time / 10);
  var rightDigit = Math.floor(props.time % 10);

  return (
    <React.Fragment>
      <TopDiv>
        <Unit>{props.unit }</Unit>
      </TopDiv>
      <LowerDiv>
        <TubeWrapperLeft>
          <DigitDiv>
            <Digit><DigitSpan>{leftDigit?leftDigit:0}</DigitSpan></Digit>
          </DigitDiv>
          <MeshImg src={mesh}/>
          <TubeImg src={tube} />
        </TubeWrapperLeft>
        <TubeWrapperRight>
          <DigitDiv>
            <Digit><DigitSpan>{rightDigit?rightDigit:0}</DigitSpan></Digit>
          </DigitDiv>
          <MeshImg src={mesh}/>
          <TubeImg src={tube} />
        </TubeWrapperRight>
      </LowerDiv>
    </React.Fragment>
  )
}

export default TubeBulb
