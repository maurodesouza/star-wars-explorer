import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.form`
  ${({ theme }) => css`
    width: min(100%, 40rem);
    position: relative;
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      width: min(100%, 54rem);
      margin-top: calc(${theme.spacings.large} * 1.5);
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.bg};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;

    &::placeholder {
      color: ${theme.colors.bg};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    top: calc(100% + ${theme.spacings.xxsmall});
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      top: calc(100% + ${theme.spacings.xsmall});
    `}
  `}
`;
