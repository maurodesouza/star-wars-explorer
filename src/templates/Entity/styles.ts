import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Results = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapperLoading = styled.div`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.medium});
    height: 30rem;

    ${media.greaterThan('small')`
      margin-top: calc(${theme.spacings.large});
      height: 50rem;
    `}
  `}
`;
