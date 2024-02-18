import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from './EducationCard'
import {educations} from "../../data/constants";

const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:5rem;
`;
const Wrapper=styled.div`
display:flex;
flex-direction:column;

`;
const Title=styled.div`

`;
const Description=styled.div`

`;
const TimeLineSection=styled.div`

`;

const Education = () => {
  return (
   <Container id="education">
     <Wrapper>
      <Title>
        Education
      </Title>
      <Description>My Education Background</Description>
      <TimeLineSection>
        <Timeline>
            {educations.map((education,index)=>(
              <TimelineItem>
                <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                    {index!== educations.length-1 && <TimelineConnector/>}
                </TimelineSeparator>
                <TimelineContent>
                  <EducationCard education={education}/>
                </TimelineContent>
              </TimelineItem>
            ))}
       </Timeline>
      </TimeLineSection>
     </Wrapper>
   </Container>
  )
}

export default Education;