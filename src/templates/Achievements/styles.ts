import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('mobile')`
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`;
