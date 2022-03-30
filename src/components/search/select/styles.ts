import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { ChevronRight } from '@styled-icons/fa-solid';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    position: relative;
    transition: filter 0.2s;
    color: ${theme.colors.bg};
    padding-inline: calc(${theme.spacings.xsmall});
    width: 65%;

    ${media.greaterThan('small')`
      width: 50%;
    `}

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

type InputProps = {
  isSelected: boolean;
};

export const Input = styled.input<InputProps>`
  ${({ theme, isSelected }) => css`
    width: 100%;
    border: 0;
    background: none;
    text-transform: capitalize;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.medium};
    color: inherit;

    ${isSelected &&
    css`
      &::placeholder {
        color: inherit;
      }
    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const ChevronRightIcon = styled(ChevronRight)`
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  top: 2px;

  ${media.greaterThan('medium')`
    width: 1.6rem;
    height: 1.6rem;
    top: 4px;
  `}
`;

type DropdownProps = {
  open: boolean;
};

const dropdownModifiers = {
  open: () => css`
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  `,
};

export const Dropdown = styled.div<DropdownProps>`
  ${({ theme, open }) => css`
    z-index: 50;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + ${theme.spacings.xsmall});
    width: 100%;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border-style: solid;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: 20rem;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.2s;
    pointer-events: none;

    ${open && dropdownModifiers.open};
  `}
`;

export const Option = styled.button`
  ${({ theme }) => css`
    flex-shrink: 0;
    width: 100%;
    padding: calc(${theme.spacings.xsmall} / 2) ${theme.spacings.xsmall};
    cursor: pointer;
    text-transform: capitalize;
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.white};
    color: ${theme.colors.bg};
    border: none;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    &:hover {
      filter: brightness(90%);
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
