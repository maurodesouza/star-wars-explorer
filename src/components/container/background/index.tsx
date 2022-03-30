import styled, { css } from 'styled-components';

const Background = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
      top center fixed ${theme.colors.bg};
  `}
`;

export { Background };
