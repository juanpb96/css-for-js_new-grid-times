import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const SharedActionGroup = () => (
  <ActionGroup>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </ActionGroup>
)

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <SharedActionGroup />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <ShowOnDesktop>
          <SharedActionGroup />
        </ShowOnDesktop>

        <Logo />

        <ShowOnDesktop>
          <Member>
            <Button>
              Subscribe
            </Button>
            <Link href="/">Already a subscriber?</Link>
          </Member>
        </ShowOnDesktop>
      </MainHeader>
    </header>
  );
};

const ShowOnDesktop = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    align-items: baseline;
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Link = styled.a`
  color: var(--color-offblack);
  font-family: var(--font-family-serif);
  --font-size: 14;
  --line-height: 22;
  font-size: calc(var(--font-size) / 16 * 1rem);
  line-height: calc(var(--line-height) / var(--font-size));
  font-weight: var(--font-weight-normal);
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
