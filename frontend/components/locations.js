import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'
import Button from './button/button'

const Locations = ({ locations }) => {
  return (
    <Stack>
      {locations.map(location => (
        <LocationItem key={location.id} location={location} />
      ))}
    </Stack>
  )
}

export default Locations

const LocationItem = ({ location }) => {
  const image = getStrapiMedia(location.image)
  const pattern = getStrapiMedia(location.pattern)

  return (
    <Stack>
      <Box
        component='img'
        src={image.url}
        alt={image.alternativeText}
        sx={{
          background: `center / cover no-repeat url(${pattern.url})`,
          width: '20.2rem',
        }}
      />
      <Box
        component='section'
        sx={{
          textAlign: { xs: 'center', sm: 'start', lg: 'center' },
        }}>
        <Typography
          variant='h4'
          sx={{
            textTransform: 'uppercase',
            mb: theme => ({
              xs: theme.spacing(4),
              sm: theme.spacing(2),
              lg: theme.spacing(4),
            }),
            mt: theme => ({ xs: theme.spacing(6), lg: theme.spacing(0) }),
          }}>
          {location.title}
        </Typography>
        <Button href={location.cta.url}>{location.cta.label}</Button>
      </Box>
    </Stack>
  )
}
