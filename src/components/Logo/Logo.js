import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import { QUERIES } from '../../constants';

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  --font-size: 48;
  --line-height: 63;
  font-family: var(--font-family-logo);
  font-size: calc(var(--font-size) / 16 * 1rem);
  line-height: calc(var(--line-height) / var(--font-size));
  font-weight: var(--font-weight-normal);

  @media ${QUERIES.tabletAndUp} {
    --font-size: 64;
    --line-height: 84;
  }
`;

const TodaysDate = styled.p`
  color: var(--color-offblack);
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -0.75rem;
`;

export default Logo;
