// dependencies
import React from 'react';
// import { useNavigate } from 'react-router';
import { v4 as randomId } from 'uuid';
import styled from 'styled-components';
// assets
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PageContainer,
  MainContent,
  ExpLeft,
  ExpRight,
  ExpCard,
  ExpCardBack,
  ExpCardFront,
  ExpCardInner,
} from './styles/containers';
import { Screencap } from './styles/media';
// import { LoadingSpinner } from '../../components';
import {
  PageTitle,
  ExpList,
  ExpItem,
  ExpItemName,
  ExpItemText,
  Tag,
  TagList,
  ExpCardLink,
} from './styles/typography';
// services
// import { useGetProjectsQuery } from '../../services/booshjaAPI';
// data
import data from '../../data/experience.json';

const ExpContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgSecondary};
  height: 100%;
  min-height: 100vh;
`;

const Experience = () => {
  // const { data, isFetching, isSuccess, isError, error } = useGetProjectsQuery();
  // const navigate = useNavigate();

  // if (isFetching) {
  //   return (
  //     <ExpContainer>
  //       <PageTitle>experience()</PageTitle>
  //       <MainContent className="center">
  //         <LoadingSpinner />
  //       </MainContent>
  //     </ExpContainer>
  //   );
  // }

  // let content;

  // if (isSuccess) {
  //   if (data.projects.length) {
  const content = (
    <MainContent className="slide-in-left">
      <ExpList>
        {data.projects.map((item) => (
          <ExpItem key={item.position}>
            <ExpLeft>
              <ExpItemName>{item.name}:</ExpItemName>
              <ExpItemText>
                <span>description: </span> {item.description}
              </ExpItemText>
              <ExpItemText>
                <span>thoughts: </span> {item.thoughts}
              </ExpItemText>
              <TagList>
                {item.tags.map((tag) => (
                  <Tag key={randomId()}>{tag}</Tag>
                ))}
              </TagList>
            </ExpLeft>
            <ExpRight>
              <ExpCard>
                <ExpCardInner>
                  <ExpCardFront>
                    <Screencap
                      src={item.imageUrl}
                      alt={`${item.name} screen capture.`}
                    />
                  </ExpCardFront>
                  <ExpCardBack>
                    <ExpCardLink href={item.githubUrl}>
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      View on GitHub
                    </ExpCardLink>
                    {item?.liveUrl && (
                      <ExpCardLink href={item.liveUrl}>
                        <span>
                          <FontAwesomeIcon icon={faLaptop} />
                        </span>
                        View Live Website
                      </ExpCardLink>
                    )}
                  </ExpCardBack>
                </ExpCardInner>
              </ExpCard>
            </ExpRight>
          </ExpItem>
        ))}
      </ExpList>
    </MainContent>
  );
  //   } else {
  //     content = (
  //       <MainContent className="slide-in-left">
  //         <ExpList>
  //           <ExpItemText>No projects found!</ExpItemText>
  //         </ExpList>
  //       </MainContent>
  //     );
  //   }
  // } else if (isError) {
  //   navigate('/error');
  // }

  return (
    <ExpContainer>
      <PageTitle>experience()</PageTitle>
      {content}
    </ExpContainer>
  );
};

export default Experience;
