import React from 'react'
import styled from 'styled-components'
import {skills} from '../../data/constants'

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
margin-top:5rem;
`;
const Wrapper=styled.div`
max-width:1100px;
position:relative;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
gap:1rem;

`;
const Title=styled.div`
font-size:2.6rem;
font-weight:600;
text-align:center;
margin-top:1rem;
color:${({theme})=>theme.text_primary};

@media screen and (max-width:768px){
  margin-top:1rem;
  font-size:2rem;
}
`;
const Description=styled.div`
fonty-size:1.1rem;
max-width:600px;
text-align:center;
color:${({theme})=>(theme.text_secondary)};

@media screen and (max-width:768px){
  font-size:.9rem;
}
`;
const SkillsContainer=styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
margin-top:1.9rem;
justify-content:center;
gap:1.9rem;
`;
const Skill=styled.div`
  width:100%;
  max-width:300px;
  background-color:${({theme})=>theme.card};
  border:0.1px solid #854CE6;
  border-radius:1rem;
  padding:1.2rem 2.1rem;

  @media screen and (max-width:768px){
    max-width:400px;
    padding:.8rem 2rem;

  }
  @media screen and (max-width:500px){
    max-width:330px;
    padding:.8rem 2rem;

  }
`;
const SkillTitle=styled.h2`
font-size:1.8rem;
font-weight:600;
color:${({theme})=>theme.text_secondary};
marign-bottom:.8rem;
text-align:center;
`;
const SkillList=styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:.9rem;
  margin-bottom:1.3rem;

`;
const SkillItem=styled.div`
display:flex;
align-items:center;
gap:.5rem;
justify-content:center;
font-size:1rem; 
color:${({theme})=>theme.text_primary+80};
border:1px solid ${({theme})=>theme.text_primary+80};
border-radius:.9rem;
padding:.9rem 1rem;
font-weight:400;

@media screen and (max-width:768px){
font-size:.8rem;
padding:.7rem .9rem
}

@media screen and (max-width:500px){
font-size:.7rem;
padding:.6rem .7rem
}
`;
const SkillImage=styled.img`
width:1.5rem;
height:1.5rem;
`;


const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title>Skills</Title>
        <Description>
        As a Full Stack Web Developer👨‍💻, my focus lies in Development and Problem Solving.Here are some skills which i have learnt and worked on for the past 2 years
        </Description>
        <SkillsContainer>
          {skills.map((item)=>(
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill)=>(
                    <SkillItem>
                      <SkillImage src={skill.image}/>
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
           
              </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills