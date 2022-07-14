import React from 'react'
import LocationsWithMap from '../components/location/locationsWithMap'
import Cta from '../components/cta'
import Seo from '../components/seo'
import Box from '@mui/material/Box'
import { fetchAPI } from '../lib/api'

const Locations = ({ content }) => {
  const { seo, locations, cta } = content.attributes

  return (
    <>
      <Seo seo={seo} />
      <Box component='main' sx={{ width: '100%' }}>
        <LocationsWithMap locations={locations} />
        <Cta cta={cta} />
      </Box>
    </>
  )
}

export default Locations

export const getStaticProps = async () => {
  try {
    const locationRes = await fetchAPI('/location')

    return {
      props: { content: locationRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
