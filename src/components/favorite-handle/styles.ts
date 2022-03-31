import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.error};
    flex-shrink: 0;
    border: 0;
    background: none;
    cursor: pointer;

    & * {
      cursor: pointer;
    }
  `}
`;
