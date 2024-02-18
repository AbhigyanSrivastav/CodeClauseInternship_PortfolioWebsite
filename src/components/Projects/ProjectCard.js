import React from 'react'
import styled from "styled-components"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Card=styled.div`
width:330px;
height:400px;
background-color:${({theme})=>theme.card};
cursor:pointer;
border-radius:10px;
box-shadow:0 0 12px 4px rgba(0,0,0,0.4);
overflow:hidden;
transition:all 0.5s ease-in-out;
padding:26px 20px;
display:flex;
flex-direction:column;
gap:0.9rem;

&:hover{
    transform:translateY(-10px);
    box-shadow:0 0 50px 4px rgba(0,0,0,0.6);
    filter:brightness(1.1);
}
`;
const Image=styled.img`
width:100%;
height:170px;
background-color:${({theme})=>theme.white};
border-radius:10px;
object-fit:cover;
box-shadow:0 0 16px 2px rgba(0,0,00.3);
`;

const Details=styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0px 2px;
`;

const Title=styled.div`
text-overflow:ellipsis;
white-space:nowrap;
max-width:100%;
-webkit-line-clamp:2;
-webkit-box-orientation:vertical;
font-size:1.2rem;
font-weight:600;
color:${({theme})=>theme.text_primary+99};

@media screen and (max-width:768px){
    font-size:.8rem;
}
`;

const Date=styled.div`
font-size:.7rem;
font-weight:400px;
color:${({theme})=>theme.text_secondary+80};

@media screen and (max-width:768px){
    font-size:.6rem;
}
`;

const Description=styled.div`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;

@media screen and (max-width:768px){
    font-size:.8rem;
}
`;

const ProjectCard = ({project}) => {

    const stackStyle={
        flexWrap:"wrap",
        justifyContent:"flex-start",
        gap:"10px"
    }
    const chipStyle={
        margin:"0px",
        fontSize:".8rem",
        fontWeight:"400",
        color:" rgb(133, 76, 230)",
        backgroundColor: "rgba(133, 76, 230,0.082)",
        padding:"2px 8px",
        borderRadius:"10px",
    
    }
  return (
<Card>
<Image src={project.image}/>
<Stack direction="row" spacing={1} style={stackStyle}>
      {project.tags.map((tag)=>( 
           <Chip label={tag} style={chipStyle}/>         
      ))}
    </Stack>
    <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
    </Details>
</Card>
  )
}

export default ProjectCard