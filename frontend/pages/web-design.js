import React from 'react'
import { fetchAPI } from '../lib/api'
import Seo from '../components/seo'
import SimpleHero from '../components/hero/simpleHero'
import Box from '@mui/material/Box'
import Designs from '../components/designs'
import Projects from '../components/projects'
import Cta from '../components/cta'

const WebDesign = ({ content }) => {
  const { seo, hero, designs, projects, cta } = content.attributes
  return (
    <>
      <Seo seo={seo} />
      <SimpleHero hero={hero} />
      <Box component='main'>
        <Designs designs={designs} />
        <Projects projects={projects} />
        <Cta cta={cta} />
      </Box>
    </>
  )
}

export default WebDesign

export const getStaticProps = async () => {
  try {
    const webDesignRes = await fetchAPI('/web-design')

    return {
      props: { content: webDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
