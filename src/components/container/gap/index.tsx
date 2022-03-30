import styled, { css } from 'styled-components';
import { media } from 'styles';

const Gap = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-inline: calc(${theme.grid.gutter} / 2);

    ${media.greaterThan('mobile')`
      padding-inline: ${theme.grid.gutter};
    `}
  `}
`;

export { Gap };
