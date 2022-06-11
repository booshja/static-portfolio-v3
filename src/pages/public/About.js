// dependencies
import React from 'react';
import styled from 'styled-components';
import { v4 as randomId } from 'uuid';
// components
import {
  PageContainer,
  MainContent,
  LeftSide,
  RightSide as Right,
} from './styles/containers';
import {
  PageTitle,
  Hi,
  StoryGreeting,
  StoryLink,
  StoryText,
  SkillsHeader,
  SkillsList,
  Skill,
} from './styles/typography';
// assets
import Headshot from '../../assets/headshot.jpg';
// data
import data from '../../data/skills.json';

const AboutContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgPrimary};
`;

const RightSide = styled(Right)`
  width: 30%;
  margin-bottom: 5rem;
  padding-top: 10rem;
`;

const About = () => (
  <AboutContainer>
    <PageTitle>about()</PageTitle>
    <MainContent className="slide-in-left">
      <LeftSide width="70%">
        <section>
          <StoryGreeting>
            <Hi>Hi! </Hi>
            I&apos;m Jacob!
          </StoryGreeting>
          <StoryText>
            I&apos;m a Full Stack Software Engineer from Seattle, WA. I&apos;m
            currently building the future of medical supply with&nbsp;
            <StoryLink
              href="https://bttnusa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bttn
            </StoryLink>
            . I love finding creative solutions to complex problems and creating
            beautiful, reliable, and responsive web applications.
          </StoryText>
          <StoryText>
            When I&apos;m not coding, you can find me spending time with
            my&nbsp;
            {/* <StoryLink
              href="https://paintingjoy.art"
              target="_blank"
              rel="noopener noreferrer"
              >
              partner
              </StoryLink>
            &nbsp; */}
            partner and dogs, listening to music, going to see live music,
            reading, watching hockey, or clumsily playing hockey in the Kraken
            Hockey League.
          </StoryText>
        </section>
        <section>
          <SkillsHeader>Skills:</SkillsHeader>
          <SkillsList>
            {data.skills.map((skill) => (
              <Skill key={randomId()}>{skill}</Skill>
            ))}
          </SkillsList>
        </section>
      </LeftSide>
      <RightSide>
        <img
          src={Headshot}
          alt="Jacob smiling in front of an abstact, brightly colored cloud mural by Painting Joy Mural Co."
        />
      </RightSide>
    </MainContent>
  </AboutContainer>
);

export default About;
