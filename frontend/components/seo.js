import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { getStrapiURL } from '../lib/api'
import { useStrapiMedia } from '../lib/media'
import { GlobalContext } from '../pages/_app'

const Seo = ({ seo }) => {
  const router = useRouter()
  const { seo: globalSeo } = useContext(GlobalContext)
  const { siteName, shareImage } = globalSeo
  const fullSeo = {
    siteName,
    shareImage: useStrapiMedia(shareImage),
    url: getStrapiURL(router.asPath),
    ...seo,
  }

  return (
    <Head>
      <title>{fullSeo.title}</title>
      <meta property='og:site_name' content={fullSeo.siteName} />
      <meta property='og:title' content={fullSeo.title} />

      <meta name='description' content={fullSeo.description} />
      <meta property='og:description' content={fullSeo.description} />

      <meta name='image' content={fullSeo.shareImage.url} />
      <meta property='og:image' content={fullSeo.shareImage.url} />

      <meta property='og:type' content={fullSeo.type} />
      <meta property='og:url' content={fullSeo.url} />
    </Head>
  )
}

export default Seo
