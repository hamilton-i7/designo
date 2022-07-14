import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import Address from '../text/address'
import Contact from '../text/contact'
import DesignoMap from '../map'

const LocationsWithMap = ({ locations }) => {
  return (
    <Stack
      sx={{
        gap: theme => ({ xs: theme.spacing(5) }),
      }}>
      {locations.map(location => (
        <LocationWithMapItem key={location.id} location={location} />
      ))}
    </Stack>
  )
}

export default LocationsWithMap

const LocationWithMapItem = ({ location }) => {
  const { address, contact } = location

  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column-reverse' },
      }}>
      <Box>
        <Typography variant='h2'>{location.country}</Typography>
        <Stack>
          <Address address={address} />
          <Contact contact={contact} />
        </Stack>
      </Box>
      <DesignoMap lat={Number(address.lat)} lng={Number(address.lng)} />
    </Stack>
  )
}
