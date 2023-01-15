import Head from 'next/head'
import React from 'react'

const Seo = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title ? `Designo | ${title}` : 'Designo'}</title>
      <meta property='og:site_name' content='Designo' />
      <meta property='og:title' content={`Designo - ${title}`} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />

      <meta name='image' content='/preview.png' />
      <meta property='og:image' content='/preview.png' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
    </Head>
  )
}

export default Seo
