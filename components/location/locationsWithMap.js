import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Address from '../text/address'
import Contact from '../text/contact'
import DesignoMap from '../map'
import { MAX_WIDTH } from '../../lib/responsive'

const locations = [
  {
    country: 'Canada',
    hq: 'Designo Central Office',
    steet: '3886 Wellington Street',
    city: 'Toronto, Ontario M9C 3J5',
    lat: 43.647338,
    lng: -79.379811,
    phone: '+1 253-863-8967',
    email: 'contact@designo.ca',
  },
  {
    country: 'Australia',
    hq: 'Designo AU Office',
    steet: '19 Balonne Street',
    city: 'New South Wales 2443',
    lat: -30.327018,
    lng: 149.783187,
    phone: '(02) 6720 9092',
    email: 'contact@designo.au',
  },
  {
    country: 'United Kingdom',
    hq: 'Designo UK Office',
    steet: '13  Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
    lat: 51.93829,
    lng: -3.883109,
    phone: '078 3115 1400',
    email: 'contact@designo.uk',
  },
]

const LocationsWithMap = ({ sx }) => {
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
          key={location.country}
          location={location}
          inverseLayout={index % 2 === 1}
        />
      ))}
    </Stack>
  )
}

export default LocationsWithMap

const LocationWithMapItem = ({ location, inverseLayout }) => {
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
          background:
            'no-repeat url(shared/desktop/bg-pattern-two-circles.svg)',
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
          <Address
            hq={location.hq}
            street={location.street}
            city={location.city}
          />
          <Contact
            simpleTitle={true}
            phone={location.phone}
            email={location.email}
          />
        </Stack>
      </Box>
      <DesignoMap lat={Number(location.lat)} lng={Number(location.lng)} />
    </Stack>
  )
}
