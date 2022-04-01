import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    width: 100%;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Label = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
  `}
`;
