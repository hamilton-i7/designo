import App from 'next/app'
import Head from 'next/head'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { createContext } from 'react'
import { GlobalStyles, ThemeProvider, CssBaseline } from '@mui/material'
import { globalStyles } from '../styles/globals'
import lightTheme from '../styles/theme/lightTheme'

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  const favicon = global.attributes.seo.favicon.desktop
  const { url: faviconUrl } = getStrapiMedia(favicon)

  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <link rel='icon' href={faviconUrl} />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  // Fetch global site data from Strapi
  const globalRes = await fetchAPI('/global')
  return {
    ...appProps,
    pageProps: { global: globalRes },
  }
}
