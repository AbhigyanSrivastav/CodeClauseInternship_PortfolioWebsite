import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/constants";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 5rem;
`;
const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
const Title = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
const Description = styled.div`
  fonty-size: 1.1rem;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  function style(value) {
    return {
      color: toggle === value ? "#854CE6" : "rgba(193,193,193,0.5)",
      border: "1px solid #854CE6",
    };
  }

  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Description>
        <ToggleButtonGroup
          color="primary"
          value={toggle}
          exclusive
          aria-label="Platform"
          onChange={(e, newValue) => setToggle(newValue)}
        >
          <ToggleButton value="all" style={style("all")}>
            All
          </ToggleButton>
          <ToggleButton value="web" style={style("web")}>
            Web
          </ToggleButton> 
          <ToggleButton value="extensions" style={style("extensions")}>
            Extensions
          </ToggleButton>
        </ToggleButtonGroup>

        <ProjectContainer>
          {projects
            .filter((project) =>toggle==="all" || project.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </ProjectContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
