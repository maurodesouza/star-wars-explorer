import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: min(100%, 8rem);

  ${media.greaterThan('medium')`
    width: min(100%, 12.5rem);
  `}
`;
