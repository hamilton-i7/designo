import React from 'react'
import Seo from '../components/seo'
import SimpleHero from '../components/hero/simpleHero'
import Box from '@mui/material/Box'
import Designs from '../components/designs'
import Projects from '../components/projects'
import Cta from '../components/cta'
import { useTheme } from '@mui/material'
import { useLargeScreenMatcher, useSmallScreenMatcher } from '../lib/responsive'
import projects from '../data/projects.json'
import designs from '../data/designs.json'

const LeafPatternTop = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        left: 0,
        top: '28rem',
        background: 'no-repeat url(/shared/desktop/bg-pattern-leaf.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const WebDesign = () => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const handleProjectImg = project => {
    if (matchesLargeScreen) {
      return project.imgSrc.desktop.default
    }
    if (matchesSmallScreen) {
      return project.imgSrc.tablet
    }
    return project.imgSrc.mobile
  }

  const webDesignProjects = [
    { ...projects[1], imgSrc: handleProjectImg(projects[0]) },
    { ...projects[2], imgSrc: handleProjectImg(projects[0]) },
  ]

  return (
    <>
      <Seo
        title='Web Design'
        description='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/graphic-design`}
      />
      <LeafPatternTop />
      <SimpleHero
        title='Graphic design'
        description='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        pattern='/web-design/desktop/bg-pattern-intro-web.svg'
      />
      <Box component='main' sx={{ width: '100%' }}>
        <Designs
          designs={designs['web-designs']}
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
          projects={webDesignProjects}
          sx={{
            mx: theme => ({
              xs: theme.spacing(3),
              sm: theme.spacing(5),
              lg: theme.spacing(20.625),
              xl: 'auto',
            }),
          }}
        />
        <Cta />
      </Box>
    </>
  )
}

export default WebDesign
