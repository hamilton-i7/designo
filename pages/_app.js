import Head from 'next/head'
import { createContext } from 'react'
import { ThemeProvider } from '@mui/material'
import lightTheme from '../styles/theme/lightTheme'
import Layout from '../components/layout'

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
