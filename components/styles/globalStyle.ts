import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  /* import fonts */
  @import url('https://fonts.googleapis.com/css?family=EB+Garamond:700|Roboto+Mono:400,700&display=swap');
  
  /* normalize.css */
  button, hr, input {
    overflow: visible; 
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing:antialiased;
  }
  article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active, a:hover {
    outline-width: 0;
  }
  b, strong {
    font-weight: bolder;
  }
  h1 {
    font-size: 2em;
    margin: .67em 0;
  }  
  img {
    border-style: none;
  }
  figure {
    margin: 1em 40px;
  }
  button, input, select, textarea {
    font: inherit;
    margin: 0;
  }
  button, select {
    text-transform: none;
  }
  [type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
  }
  [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {
    outline: ButtonText dotted 1px; 
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em; 
  }
  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
    height: auto;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit; 
  }

  /* custom global styles */
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
      font-size: 10px;
  }
  body {
      font-size: 1.4rem;
      line-height: 1;
      font-family: ${theme.textFont};
      background: white;
      margin: 0;
      -webkit-font-smoothing: antialiased;
  }
  body > div, body, html {
    height: 100%;
  }
  a {
      text-decoration: none;
      color: ${theme.black};
  }
  button {
      font-family: ${theme.textFont};
  }
`

export default GlobalStyle
