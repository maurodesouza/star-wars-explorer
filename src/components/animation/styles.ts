import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    max-width: 40rem;
    text-align: center;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
