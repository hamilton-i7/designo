import Box from '@mui/material/Box'
import Cta from '../components/cta'
import FullHero from '../components/hero/fullHero'
import Projects from '../components/projects'
import Seo from '../components/seo'
import Traits from '../components/pages/home/traits'
import projects from '../data/projects.json'
import { useLargeScreenMatcher, useSmallScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

export const LeafPatternTop = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        left: 0,
        top: '48rem',
        background: 'no-repeat url(/shared/desktop/bg-pattern-leaf.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const LeafPatternBottom = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        right: 0,
        top: '188rem',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
        '::before': {
          content: '""',
          position: 'absolute',
          right: 0,
          bottom: 0,
          background: 'no-repeat url(/shared/desktop/bg-pattern-leaf.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)',
          width: '100%',
          height: '100%',
        },
      }}
    />
  )
}

const Home = () => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const handleProjectImg = project => {
    if (project.text === 'Web design' && matchesLargeScreen) {
      return project.imgSrc.desktop.large
    }

    if (matchesLargeScreen) {
      return project.imgSrc.desktop.default
    }
    if (matchesSmallScreen) {
      return project.imgSrc.tablet
    }
    return project.imgSrc.mobile
  }

  const homeProjects = projects.map(project => ({
    ...project,
    imgSrc: handleProjectImg(project),
  }))

  return (
    <>
      <Seo
        title='Home'
        description='With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.'
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/`}
      />
      <LeafPatternTop />
      <FullHero
        title='Award-winning custom designs and digital branding solutions'
        description='With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.'
        cta={{
          label: 'Learn more',
          url: '/about',
        }}
        image='/home/desktop/image-hero-phone.png'
        pattern='/home/desktop/bg-pattern-hero-home.svg'
      />
      <Box component='main' sx={{ width: '100%' }}>
        <Projects
          projects={homeProjects}
          complexLayout
          sx={{
            my: theme => ({ xs: theme.spacing(15), lg: theme.spacing(20) }),
            mx: theme => ({
              xs: theme.spacing(3),
              sm: theme.spacing(5),
              lg: theme.spacing(20.625),
              xl: 'auto',
            }),
          }}
        />
        <Traits />
        <Cta />
      </Box>
      <LeafPatternBottom />
    </>
  )
}

export default Home
