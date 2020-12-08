import 'react-toastify/dist/ReactToastify.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}
html, body {
height: 100%;
}

body {

  background-color: #545560;
  color: #fff;
  -webkit-font-smoothing: antialiased
}

body, input, button {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.6rem
}
`

export default GlobalStyle
