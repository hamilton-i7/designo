import React, { useContext } from 'react'
import { fetchAPI } from '../lib/api'
import Seo from '../components/seo'
import SimpleHero from '../components/hero/simpleHero'
import Box from '@mui/material/Box'
import Designs from '../components/designs'
import Projects from '../components/projects'
import Cta from '../components/cta'
import { GlobalContext } from './_app'
import { useStrapiMedia } from '../lib/media'

const LeafPatternTop = ({ pattern }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        left: 0,
        top: '28rem',
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const GraphicDesign = ({ content }) => {
  const { seo, hero, designs, projects, cta } = content.attributes
  const { backgroundPattern } = useContext(GlobalContext)
  const pattern = useStrapiMedia(backgroundPattern)

  return (
    <>
      <Seo seo={seo} />
      <LeafPatternTop pattern={pattern} />
      <SimpleHero hero={hero} />
      <Box component='main' sx={{ width: '100%' }}>
        <Designs
          designs={designs}
          sx={{
            mx: theme => ({
              xs: theme.spacing(3),
              sm: theme.spacing(5),
              lg: theme.spacing(20.625),
              xl: 'auto',
            }),
            my: theme => ({
              xs: theme.spacing(12),
              sm: theme.spacing(15),
              sm: theme.spacing(20),
            }),
          }}
        />
        <Projects
          projects={projects}
          sx={{
            mx: theme => ({
              xs: theme.spacing(3),
              sm: theme.spacing(5),
              lg: theme.spacing(20.625),
              xl: 'auto',
            }),
          }}
        />
        <Cta cta={cta} />
      </Box>
    </>
  )
}

export default GraphicDesign

export const getStaticProps = async () => {
  try {
    const graphicDesignRes = await fetchAPI('/graphic-design')

    return {
      props: { content: graphicDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
