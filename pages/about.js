import React from 'react'
import Cta from '../components/cta'
import Box from '@mui/material/Box'
import HeroWithImage from '../components/hero/heroWithImage'
import LocationsWithCta from '../components/location/locationsWithCta'
import TraitItem from '../components/pages/about/traitItem'
import Seo from '../components/seo'
import { LeafPatternTop } from '.'
import { useTheme } from '@mui/material'
import { useLargeScreenMatcher, useSmallScreenMatcher } from '../lib/responsive'

const LeafPatternBottom = () => {
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
          background: 'no-repeat url(/shared/desktop/bg-pattern-leaf.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        },
      }}
    />
  )
}

const About = () => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const heroPattern = matchesSmallScreen
    ? '/about/desktop/bg-pattern-hero-about-desktop.svg'
    : '/about/mobile/bg-pattern-hero-about-mobile.svg'

  const handleImage = source => {
    if (matchesLargeScreen) {
      return `/about/desktop/${source}`
    }
    if (matchesSmallScreen) {
      return `/about/tablet/${source}`
    }
    return `/about/mobile/${source}`
  }

  const images = {
    hero: handleImage('image-about-hero.jpg'),
    traits: [
      handleImage('image-world-class-talent.jpg'),
      handleImage('image-real-deal.jpg'),
    ],
  }

  return (
    <>
      <Seo
        title='About'
        description='Founded in 2010, we are a creative agency that produces lasting results for our clients.'
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/about`}
      />
      <LeafPatternTop />
      <HeroWithImage
        title='About us'
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
        image={images.hero}
        imageAlt='People having a meeting in the workplace'
        pattern={heroPattern}
      />
      <Box
        component='main'
        sx={{
          mt: theme => ({ sm: theme.spacing(15), lg: theme.spacing(20) }),
          width: '100%',
        }}>
        <TraitItem
          image={images.traits[0]}
          imageAlt='Woman staring at art pieces on the wall'
          pattern='bg-pattern-two-circles.svg'
          title='Word-class talent'
          description={`We are a crew of strategists, problem-solvers, and technologists. 
          Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. 
          We are constantly updating our skills in a myriad of platforms.
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. 
          We give great importance to craftsmanship, service, and prompt delivery. 
          Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.`}
        />
        <LocationsWithCta />
        <TraitItem
          image={images.traits[1]}
          imageAlt='Woman staring at art pieces on the wall'
          pattern='bg-pattern-two-circles.svg'
          title='The real deal'
          description={`As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. 
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. 
          We make design and technology more accessible and give you tools to measure success.
          
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
          reverseLayout
        />
        <Cta />
      </Box>
      <LeafPatternBottom />
    </>
  )
}

export default About
