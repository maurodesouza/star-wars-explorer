import styled, { css, DefaultTheme } from 'styled-components';
import { media } from 'styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    flex-direction: column;

    ${media.greaterThan('tablet')`
      flex-direction: row;
    `}
  `}
`;

export const Label = styled.strong`
  flex-shrink: 0;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9.3rem, 1fr));
    align-content: center;
    gap: ${theme.spacings.xxsmall};
    font-size: inherit;
  `}
`;

type OptionProps = {
  selected?: boolean;
};

const optionModifiers = {
  selected: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.bg};
    font-weight: ${theme.font.weights.bold};
  `,
};

export const Option = styled.button<OptionProps>`
  ${({ theme, selected }) => css`
    border: 0;
    border-radius: ${theme.border.radius};
    background: none;
    padding-block: 0.4rem;
    border: 1px solid ${theme.colors.primary};
    text-transform: capitalize;
    font-size: ${theme.font.sizes.xsmall};

    ${selected && optionModifiers.selected(theme)}

    ${media.greaterThan('mobile')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
