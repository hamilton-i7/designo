import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import Address from '../text/address'
import Contact from '../text/contact'

const LocationsWithMap = ({ location }) => {
  return <Stack></Stack>
}

export default LocationsWithMap

const LocationWithMapItem = ({ location }) => {
  const { address, contact } = location

  return (
    <Box>
      <Typography variant='h2'>{location.country}</Typography>
      <Stack>
        <Address address={address} />
        <Contact contact={contact} />
      </Stack>
    </Box>
  )
}
