import styled from "styled-components";

const Document=styled.img`
display:none;
height:70px;
width:fit-content;
background-color:#000;
border-radius:.7rem;
transition:all 0.3s ease-in-out;
&:hover{
    cursor:pointer;
    opacity:0.8;
}
`;


const Card=styled.div`
width:650px;
border-radius:.8rem;
box-shadow:0px 4px 2px rgba(23,92,230,0.15);
padding:.8rem 1rem;
justify-content:space-between;
overflow:hidden;
display:flex;
flex-direction:column;
gap:.8rem;
transition:all 0.3s ease-in-out;
border:1px solid #306ee8;
&:hover{
    box-shadow:0px 0px 1.2rem rgba(0,0,0,0.2);
    transform:translateY(-5px);
}

&:hover ${Document}{
    display:flex;
}

@media screen and (max-width:768px){
    padding:.8rem;
    gap:0.5rem;
    width:300px;
}
`;
const CardTop=styled.div`
display:flex;
gap:1rem;
wodth:100%;
`;
const Logo=styled.img`
height:50px;
background-color:#000;
border-radius:.7rem;
margin-top:5px;

@media screen and (max-width:768px){
    height:40px;
}
`;
const Content=styled.div`
display:flex;
flex-direction:column;
width:100%;

`;
const Role=styled.div`
font-size:1.2rem;
font-weight:600;
color:${({theme})=>theme.text_primary+99};

@media screen and (max-width:768px){
    font-size:.8rem;
}
`;
const Company=styled.div`
font-size:.9rem;
font-weight:500px;
color:${({theme})=>theme.text_secondary+99};

@media screen and (max-width:768px){
    font-size:.7rem;
}
`;
const Duration=styled.div`
font-size:.7rem;
font-weight:400px;
color:${({theme})=>theme.text_secondary+80};

@media screen and (max-width:768px){
    font-size:.6rem;
}
`;

const Description=styled.div`
width:100%;
font-size:1rem;
font-weight:400;
color:${({theme})=>theme.text_primary+99};
margin-bottom:.8rem;

@media screen and (max-width:768px){
    font-size:.8rem;
}
`;

const Skills=styled.div`
width:100%;
display:flex;
gap:1rem;
margin-top:1rem;
`;

const ItemWrapper=styled.div`
display:flex;
flex-wrap:wrap;
gap:.5rem;
`;

const Skill=styled.div`
font-size:0.9rem;
font-weight:500;
color:${({theme})=>theme.text_primiary+99};

@media screen and (max-width:768px){
    font-size:.8rem;
}
`;


const ExperienceCard=({experience})=>{
    return(
        <Card>
        <CardTop>
            <Logo src={experience.img}/>
            <Content>
                <Role>
                    {experience.role}
                </Role>
                <Company>
                    {experience.company }
                </Company>
                <Duration>
                    {experience.date}
                </Duration>
            </Content>
        </CardTop>
        <Description>
            {experience.desc}
            {experience.skills && (
                <>
                <br/>
                <Skills>
                    <b>Skills:</b>
                    <ItemWrapper>
                        {experience.skills.map((skill)=>(
                            <Skill>• {skill}</Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
                </>
            )}
        </Description>
            {experience.doc&& (
                <a href={experience.doc} target='new'>
                    <Document src={experience.doc}/>
                </a>
            )}
        </Card>
    )
}


export default ExperienceCard;