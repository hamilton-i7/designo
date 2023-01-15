import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '../button/button'
import { useTheme } from '@mui/material'
import { MAX_WIDTH } from '../../lib/responsive'
import Link from '../link'

const LocationsWithCta = () => {
  const theme = useTheme()

  return (
    <Box
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
          [theme.breakpoints.up('xl')]: {
            mx: 'auto',
          },
        }}>
        <LocationItem
          image='/shared/desktop/illustration-canada.svg'
          imageAlt='CN Tower'
          pattern='/shared/desktop/bg-pattern-small-circle.svg'
          country='Canada'
        />
        <LocationItem
          image='/shared/desktop/illustration-australia.svg'
          imageAlt='Sydney Opera House'
          pattern='/shared/desktop/bg-pattern-small-circle.svg'
          country='Australia'
        />
        <LocationItem
          image='/shared/desktop/illustration-united-kingdom.svg'
          imageAlt='Tower Bridge'
          pattern='/shared/desktop/bg-pattern-small-circle.svg'
          country='United Kingdom'
        />
      </Stack>
    </Box>
  )
}

export default LocationsWithCta

const LocationItem = ({ image, imageAlt, pattern, country }) => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Box component='figure'>
        <Box
          component='img'
          src={image}
          alt={imageAlt}
          sx={{
            background: `center / cover no-repeat url(${pattern})`,
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
          {country}
        </Typography>
      </Box>
      <Link href='/locations'>
        <Button>See location</Button>
      </Link>
    </Stack>
  )
}
