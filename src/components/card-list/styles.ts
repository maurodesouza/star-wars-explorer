import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(auto-fit, minmax(12.8rem, 1fr));

    ${media.greaterThan('small')`
      gap: ${theme.spacings.small};
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    `}
  `}
`;

export const Fill = styled.div`
  width: 100%;
`;
