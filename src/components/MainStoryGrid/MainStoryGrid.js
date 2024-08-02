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
  --side-padding: 16px;
  --grid-division-width: 1px;
  --story-side-space: calc(var(--side-padding) - var(--grid-division-width));

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    --main-story-width: calc(518px + var(--story-side-space));

    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 0 var(--grid-division-width);
    background-color: var(--color-gray-300);
    grid-template-columns: var(--main-story-width) 1fr;

    & > * {
      background-color: var(--color-gray-100);
    }
  }

  @media ${QUERIES.laptopAndUp} {
    --main-story-width: calc(477px + var(--story-side-space));
    --secondary-story-width: calc(386px + (var(--story-side-space) * 2));

    grid-template-areas: 
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: var(--main-story-width) var(--secondary-story-width) 1fr;
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--side-padding);
  }

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} { 
    padding-left: var(--side-padding);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline: var(--side-padding);
    border-right: 1px solid var(--color-gray-300);
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

  @media ${QUERIES.tabletOnly} { 
    padding-top: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-left: var(--side-padding);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletOnly} { 
    padding-top: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    --spacing: var(--side-padding);

    margin-top: var(--spacing);
    margin-left: var(--spacing);
    border-top: 1px solid var(--color-gray-300);
    padding-top: var(--spacing);
  }
`;

export default MainStoryGrid;
