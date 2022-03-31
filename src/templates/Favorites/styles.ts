import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Results = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('mobile')`
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`;

export const Wrapper = styled.div`
  height: 50rem;
`;
