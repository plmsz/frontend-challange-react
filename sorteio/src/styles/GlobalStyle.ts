import { createGlobalStyle } from 'styled-components/'
import { background, black400 } from './Variables'

const GlobalStyle = createGlobalStyle`
*{
    font-family: Montserrat, sans-serif;
}

html {
  font-size: 62.5%;
}
body{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${background};
    color: ${black400};
}
`
export default GlobalStyle
