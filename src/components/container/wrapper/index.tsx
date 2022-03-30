import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: min(100%, ${theme.grid.container});
    height: 100%;
    margin-inline: auto;
    position: relative;
  `}
`;

export { Wrapper };
