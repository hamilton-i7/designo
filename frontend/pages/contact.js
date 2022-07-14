import React, { useContext } from 'react'
import HeroWithForm from '../components/hero/heroWithForm'
import Seo from '../components/seo'
import LocationsWithCta from '../components/location/locationsWithCta'
import Box from '@mui/material/Box'
import { fetchAPI } from '../lib/api'
import { GlobalContext } from './_app'
import { getStrapiMedia } from '../lib/media'

const LeafPatternBottom = ({ pattern }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        top: '98rem',
        right: 0,
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const Contact = ({ content }) => {
  const { seo, hero, form, locations } = content.attributes
  const { backgroundPattern } = useContext(GlobalContext)
  const pattern = getStrapiMedia(backgroundPattern)

  return (
    <>
      <Seo seo={seo} />
      <LeafPatternBottom pattern={pattern} />
      <HeroWithForm hero={hero} form={form} />
      <LocationsWithCta locations={locations} component='main' />
    </>
  )
}

export default Contact

export const getStaticProps = async () => {
  try {
    const contactRes = await fetchAPI('/contact')

    return {
      props: { content: contactRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
