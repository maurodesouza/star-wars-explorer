import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.large};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.medium} * 2);
    width: 100%;
    text-align: center;
  `}
`;
