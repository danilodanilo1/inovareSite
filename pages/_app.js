import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {ParallaxProvider} from 'react-scroll-parallax'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  )
}
