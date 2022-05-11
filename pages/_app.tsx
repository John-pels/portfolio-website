import { defaultTheme } from '@src/theme'
import { GlobalStyles } from '@src/theme/globalStyles'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {/* <CustomCursor /> */}
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
