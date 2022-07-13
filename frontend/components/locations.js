import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'
import Button from './button/button'
import { useTheme } from '@mui/material'
import { MAX_WIDTH } from '../lib/responsive'

const Locations = ({ locations, component = 'div' }) => {
  const theme = useTheme()

  return (
    <Box
      component={component}
      sx={{
        width: '100%',
      }}>
      <Stack
        sx={{
          m: theme => ({
            xs: theme.spacing(15, 3),
            sm: theme.spacing(15, 5),
            lg: theme.spacing(20, 20.625),
          }),
          gap: theme => ({ xs: theme.spacing(6), lg: 0 }),
          flexDirection: { lg: 'row' },
          justifyContent: { lg: 'space-between' },
          maxWidth: MAX_WIDTH,
          [theme.breakpoints.up('tv')]: {
            mx: 'auto',
          },
        }}>
        {locations.map(location => (
          <LocationItem key={location.id} location={location} />
        ))}
      </Stack>
    </Box>
  )
}

export default Locations

const LocationItem = ({ location }) => {
  const image = getStrapiMedia(location.image)
  const pattern = getStrapiMedia(location.pattern)

  return (
    <Stack
      sx={{
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Box component='figure'>
        <Box
          component='img'
          src={image.url}
          alt={image.alternativeText}
          sx={{
            background: `center / cover no-repeat url(${pattern.url})`,
            width: '20.2rem',
            mx: 'auto',
          }}
        />
        <Typography
          variant='h4'
          component='figcaption'
          sx={{
            textTransform: 'uppercase',
            mb: theme => theme.spacing(4),
            mt: theme => theme.spacing(6),
          }}>
          {location.country}
        </Typography>
      </Box>
      <Button href={location.cta.url}>{location.cta.label}</Button>
    </Stack>
  )
}
