import { createGlobalStyle } from 'styled-components';
import Background from '../assets/background.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${Background});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;