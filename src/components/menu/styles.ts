import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as FooterStyles from 'components/footer/styles';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuNav = styled.nav`
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: initial;
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xlarge};

    & + & {
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      position: relative;
      font-size: ${theme.font.sizes.large};

      & + & {
        margin-top: 0;
        margin-left: calc(${theme.spacings.large});
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        background-color: ${theme.colors.primary};
        width: 100%;
        bottom: -8px;
        height: 2px;
        transform: scaleX(0);
        transition: transform 0.3s;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.div<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.bg};
    transition: opacity 0.2s;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 0 ${theme.spacings.small} ${theme.spacings.small};
    z-index: 20;

    ${IconWrapper} {
      position: absolute;
      top: ${theme.spacings.small};
      right: ${theme.spacings.small};
    }

    ${MenuNav} {
      display: flex;
      flex: 1;
      transition: transform 0.2s;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3.2rem)'};
    }

    ${FooterStyles.Container} {
      transition: transform 0.2s;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3.2rem)'};
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;
