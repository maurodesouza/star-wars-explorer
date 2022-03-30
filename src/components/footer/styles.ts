import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    width: min(100%, 57rem);
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const MadeBy = styled.p`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.xsmall} / 2);

    a {
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    }
  `}
`;

export const Copy = styled.strong``;
