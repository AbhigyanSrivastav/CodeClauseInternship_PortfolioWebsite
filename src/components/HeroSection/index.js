import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from '../../assests/HeroImg.png';
import HeroBgAnimation from "../../HeroBgAnimation";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 135px 30px;
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 55%;
  right: 0;
  bottom: 0;
  left: 51%;
  overflow: hidden;
  width: 85%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
font-size:3rem;
font-weight:700;
color:${({theme})=>theme.text_primary};
line-height:3.5rem;

@media screen and (max-width:960px){
  text-align:center;
}

@media screen and (max-width:640px){
  font-size:2.5rem;
  line-height:3rem;
  margin-bottom:.5rem;
}
`;
const Span = styled.div`
color:${({theme})=>theme.primary};
cursor:pointer;
font-weight:bold;
`;

const TextLoop = styled.div`
font-size:2rem;
font:weight:600;
color:${({theme})=>theme.text_primary};
line-height:3.5rem;
gap:.8rem;
display:flex;

@media screen and (max-width:960px){
  text-align:center;
}

@media screen and (max-width:640px){
  font-size:1.5rem;
  line-height:2rem;
  margin-bottom:1rem;
}
`;

const Subtitle = styled.div`
font-size:1.2rem;
font-weight:400;
color:${({theme})=>theme.text_primary+95};
line-height:2rem;
margin-bottom:2.5rem;
`;

const ResumeButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 95%;
max-width: 200px;
text-align: center;
padding: 16px 0;
color:${({ theme }) => theme.white};
border-radius: 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
&:hover {
transform: scale(1.05);
transition: all 0.4s ease-in-out;
box-shadow:  20px 20px 60px #1F2634,
filter: brightness(1);
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 1rem;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 2rem;
  }
`;

const Image=styled.img`
width:100%;
position:relative;
border-radius:50%;
max-width:400px;
max-height:400px;
object-fit:cover;
object-position:top center;
border:2px solid ${({theme})=>theme.primary};
@media screen and (max-width:768px){
  max-width:400px;
  max-height:400px;
}

@media screen and (max-width:640px){
  max-width:300px;
  max-height:300px;
}
`;

const Hero = () => {
  return (
      <HeroContainer id="about">
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hey, I am
              <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <Subtitle>
              {Bio.description}
            </Subtitle>
            <ResumeButton href={Bio.resume} target='_blank'>
                  Get Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer>
                  <Image src={HeroImg} alt="HeroImage"/>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
  );
};

export default Hero;
