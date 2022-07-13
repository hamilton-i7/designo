import React, { useContext } from 'react'
import Cta from '../components/cta'
import Box from '@mui/material/Box'
import HeroWithImage from '../components/hero/heroWithImage'
import Locations from '../components/locations'
import TraitItem from '../components/pages/about/traitItem'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import { LeafPatternTop } from '.'
import { GlobalContext } from './_app'
import { getStrapiMedia } from '../lib/media'

const LeafPatternBottom = ({ pattern }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        right: '-44rem',
        top: '179rem',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
        '::before': {
          content: '""',
          position: 'absolute',
          right: 0,
          bottom: 0,
          background: `no-repeat url(${pattern.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        },
      }}
    />
  )
}

const About = ({ content }) => {
  const { seo, hero, traits, locations, cta } = content.attributes
  const { backgroundPattern } = useContext(GlobalContext)
  const pattern = getStrapiMedia(backgroundPattern)

  return (
    <>
      <Seo seo={seo} />
      <LeafPatternTop pattern={pattern} />
      <HeroWithImage hero={hero} />
      <Box
        component='main'
        sx={{
          mt: theme => ({ sm: theme.spacing(15), lg: theme.spacing(20) }),
          width: '100%',
        }}>
        <TraitItem trait={traits[0]} />
        <Locations locations={locations} />
        <TraitItem trait={traits[1]} reverseLayout />
        <Cta cta={cta} />
      </Box>
      <LeafPatternBottom pattern={pattern} />
    </>
  )
}

export default About

export const getStaticProps = async () => {
  try {
    const aboutRes = await fetchAPI('/about')

    return {
      props: { content: aboutRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
