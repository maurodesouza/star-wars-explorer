import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 26rem;
    background-color: ${theme.colors.white};
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.white};

    & * {
      cursor: pointer;
      transition: 0.3s;
      will-change: transform opacity;
    }


    &:hover {
      box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5);

      ${Content} {
        opacity: 1;
      }

      ${Label} {
        transform: translateX(0%);
      }

      ${IconWrapper} {
        opacity: 1;
        transform: translateX(0%);
      }

      img {
        transform: scale(1.1);
      }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    position: absolute;
    opacity: 0;
    bottom: 0;
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 30%,
      rgba(0, 0, 0, 0.8) 69%,
      #000 100%
    );
  `}
`;

export const Label = styled.h3`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weights.bold};
    transform: translateX(-20%);
  `}
`;

export const IconWrapper = styled.button`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.error};
    margin-left: ${theme.spacings.xsmall};
    flex-shrink: 0;
    border: 0;
    opacity: 0;
    background: none;
    cursor: pointer;
    z-index: 10;
    transform: translateX(-40%);

    & * {
      cursor: pointer;
    }
  `}
`;
