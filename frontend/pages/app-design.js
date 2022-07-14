import React from 'react'
import { fetchAPI } from '../lib/api'
import Seo from '../components/seo'
import SimpleHero from '../components/hero/simpleHero'
import Box from '@mui/material/Box'
import Designs from '../components/designs'
import Projects from '../components/projects'
import Cta from '../components/cta'

const AppDesign = ({ content }) => {
  const { seo, hero, designs, projects, cta } = content.attributes
  return (
    <>
      <Seo seo={seo} />
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

export default AppDesign

export const getStaticProps = async () => {
  try {
    const appDesignRes = await fetchAPI('/app-design')

    return {
      props: { content: appDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
