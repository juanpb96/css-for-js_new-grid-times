import React from 'react';
import styled, { css } from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList isRowOnTablet>
          {OPINION_STORIES.map((story, index) => (
            // TODO: Remove borders and adjust positioning in tablet
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 0 1px;
    background-color: var(--color-gray-300);
    grid-template-columns: 533px 1fr;

    & > * {
      background-color: var(--color-gray-100);
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} { 
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} { 
    padding-left: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-gray-300);

  & > * {
    padding-block: 16px;
    background-color: var(--color-gray-100);
  }

  @media ${QUERIES.tabletAndUp} {
    & > :first-child {
      padding-top: 0;
    }

    & > :last-child {
      padding-bottom: 0;
    }
  }

  ${({ isRowOnTablet }) => isRowOnTablet && css`
    @media ${QUERIES.tabletOnly} {
      flex-direction: row;
      gap: 32px;
      background-color: transparent;

      & > * {
        flex: 1;
        padding-block: 0;
      }
    }
  `}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} { 
    padding-top: 48px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} { 
    padding-top: 48px;
  }
`;

export default MainStoryGrid;
