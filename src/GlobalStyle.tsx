import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --lightPurple: #EFE8FD;
    --deepPurple: #7C4FFD;
    --gray: #BBBBBB;
    --lightGray: #D9D9D9;
    --lightBlack: #535353;
  }

  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica
      Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
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
