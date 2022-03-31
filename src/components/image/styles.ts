import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: ${theme.colors.bg};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.bg};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.bg};
    text-align: center;
  `}
`;
