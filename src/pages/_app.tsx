import GlobalStyle from '../styles/Global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
