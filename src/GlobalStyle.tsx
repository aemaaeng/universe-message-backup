import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --lightPurple: #EFE8FD;
    --deepPurple: #7C4FFD;
    --gray: #BBBBBB;
    --lightGray: #D9D9D9;
    --lightBlack: #535353;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard-Regular'
  }

  body {
    padding: 0;
    margin: 0;
    background-color: var(--lightPurple);
  }
  
  main {
    /* background-color: var(--lightPurple); */
    /* position: absolute; */
    height: inherit;
    top: 20px;
    /* bottom: 50px; */
    padding-bottom: 65px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit
  }
`;
