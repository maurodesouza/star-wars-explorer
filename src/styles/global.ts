import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 10px;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none
  }

  a,
  button {
    cursor: pointer;
  }

  input,
  textarea {
    cursor: text;
  }

  ${({ theme }) => css`
    body,
    button,
    input,
    textarea {
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weights.normal};
      color: ${theme.colors.white};
    }
  `}
`;

export { GlobalStyles };
