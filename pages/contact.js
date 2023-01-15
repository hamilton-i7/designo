import React from 'react'
import HeroWithForm from '../components/hero/heroWithForm'
import Seo from '../components/seo'
import LocationsWithCta from '../components/location/locationsWithCta'
import Box from '@mui/material/Box'

const LeafPatternBottom = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        top: '98rem',
        right: 0,
        background: 'no-repeat url(/shared/desktop/bg-pattern-leaf.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const Contact = () => {
  return (
    <>
      <Seo
        title='Contact'
        description="Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow."
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/contact`}
      />
      <LeafPatternBottom />
      <HeroWithForm
        title='Contact us'
        description="Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
      />
      <LocationsWithCta />
    </>
  )
}

export default Contact
