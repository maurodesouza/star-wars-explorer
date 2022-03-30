import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-block: ${theme.spacings.large};
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${theme.spacings.large};
  `}
`;
