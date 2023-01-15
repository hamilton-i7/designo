import React from 'react'
import LocationsWithMap from '../components/location/locationsWithMap'
import Cta from '../components/cta'
import Seo from '../components/seo'
import Box from '@mui/material/Box'

const Locations = () => {
  return (
    <>
      <Seo
        title='Locations'
        description="Check where we're located all over the world"
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/locations`}
      />
      <Box component='main' sx={{ width: '100%' }}>
        <LocationsWithMap
          sx={{
            mx: theme => ({
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

export default Locations
