import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    gap: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    width: 100%;

    ${media.greaterThan('tablet')`
      flex-direction: row;
    `}
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: min(100%, 30rem);
    aspect-ratio: 0.65;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    align-self: center;
    flex-shrink: 0;
    border: 1px solid ${theme.colors.white};

    ${media.greaterThan('tablet')`
      align-self: unset;
      width: 20rem;
    `}

    button {
    }
  `}
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Field = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Key = styled.strong`
  text-transform: capitalize;
  flex-shrink: 0;
`;

export const Value = styled.span``;
