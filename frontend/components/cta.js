import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from './button/button'
import { getStrapiMedia } from '../lib/media'
import { useTheme } from '@mui/material'
import { useSmallScreenMatcher } from '../lib/responsive'

const Cta = ({ cta }) => {
  const pattern = getStrapiMedia(cta.pattern)
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  return (
    <Stack
      component='section'
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        p: theme => ({ xs: theme.spacing(8, 3), sm: theme.spacing(7.125) }),
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: { xs: '240%', sm: '140%' },
        backgroundPosition: { xs: 'right', sm: 'center' },
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: '1.5rem',
        mx: theme => ({ xs: theme.spacing(3), sm: theme.spacing(5) }),
        position: 'relative',
        top: '19rem',
        mt: theme => theme.spacing(-10),
      }}>
      <Box
        sx={{
          color: theme => theme.palette.common.white,
          mb: theme => theme.spacing(4),
        }}>
        <Typography
          variant={matchesSmallScreen ? 'h3' : 'h1'}
          component='h2'
          sx={{ mb: theme.spacing(2), mx: 'auto', maxWidth: '33.5rem' }}>
          {cta.title}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            mx: 'auto',
            maxWidth: '40rem',
          }}>
          {cta.description}
        </Typography>
      </Box>
      <Button onDark href={cta.link.url}>
        {cta.link.label}
      </Button>
    </Stack>
  )
}

export default Cta
