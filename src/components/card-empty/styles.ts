import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 26rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: ${theme.border.radius};
    gap: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.white};
  `}
`;

export const Label = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;
