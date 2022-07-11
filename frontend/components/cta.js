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
        p: { xs: '6.4rem 2.4rem', sm: '5.7rem' },
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: { xs: '240%', sm: '140%' },
        backgroundPosition: { xs: 'right', sm: 'center' },
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: '1.5rem',
        mx: { xs: '2.4rem', sm: '4rem' },
        position: 'relative',
        top: '4%',
        mt: '-8rem',
      }}>
      <Box sx={{ color: theme => theme.palette.common.white, mb: '3.2rem' }}>
        <Typography
          variant={matchesSmallScreen ? 'h3' : 'h1'}
          component='h2'
          sx={{ mb: '1.6rem', mx: 'auto', maxWidth: '33.5rem' }}>
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
