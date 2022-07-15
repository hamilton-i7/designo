import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Address from '../text/address'
import Contact from '../text/contact'
import DesignoMap from '../map'
import { MAX_WIDTH } from '../../lib/responsive'
import { useStrapiMedia } from '../../lib/media'

const LocationsWithMap = ({ locations, sx }) => {
  return (
    <Stack
      component='section'
      sx={{
        gap: theme => ({
          xs: theme.spacing(5),
          sm: theme.spacing(15),
          desktop: theme.spacing(4),
        }),
        maxWidth: MAX_WIDTH,
        ...sx,
      }}>
      {locations.map((location, index) => (
        <LocationWithMapItem
          key={location.id}
          location={location}
          inverseLayout={index % 2 === 1}
        />
      ))}
    </Stack>
  )
}

export default LocationsWithMap

const LocationWithMapItem = ({ location, inverseLayout }) => {
  const { address, contact } = location
  const pattern = useStrapiMedia(location.pattern)

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column-reverse',
          desktop: inverseLayout ? 'row-reverse' : 'row',
        },
        gap: theme => ({ sm: theme.spacing(4) }),
      }}>
      <Box
        sx={{
          background: `no-repeat url(${pattern.src})`,
          backgroundSize: { xs: '60rem', sm: '55rem' },
          backgroundPosition: {
            xs: 'right top',
            sm: 'left bottom',
          },
          backgroundColor: theme => theme.palette.complementary.main,
          p: theme => ({
            xs: theme.spacing(10, 3),
            sm: theme.spacing(11, 9.375),
          }),
          textAlign: { xs: 'center', sm: 'start' },
          borderRadius: { sm: '1.5rem' },
          width: { desktop: '100%' },
        }}>
        <Typography
          variant='h1'
          component='h2'
          color='primary'
          sx={{
            m: 0,
            mb: theme => ({ xs: theme.spacing(3) }),
          }}>
          {location.country}
        </Typography>
        <Stack
          sx={{
            gap: theme => ({
              xs: theme.spacing(3),
              sm: theme.spacing(15),
              desktop: theme.spacing(14),
            }),
            flexDirection: { sm: 'row' },
          }}>
          <Address address={address} />
          <Contact contact={contact} />
        </Stack>
      </Box>
      <DesignoMap lat={Number(address.lat)} lng={Number(address.lng)} />
    </Stack>
  )
}
