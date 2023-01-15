import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from './button/button'
import { useTheme } from '@mui/material'
import { MAX_WIDTH, useSmallScreenMatcher } from '../lib/responsive'

const Cta = () => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  return (
    <Stack
      component='section'
      sx={{
        alignItems: 'center',
        justifyContent: { lg: 'space-between' },
        textAlign: { xs: 'center', lg: 'start' },
        p: theme => ({
          xs: theme.spacing(8, 3),
          sm: theme.spacing(7.125),
          lg: theme.spacing(8, 12),
        }),
        background:
          'no-repeat url(/app-design/desktop/bg-pattern-intro-app.svg)',
        backgroundSize: { xs: '240%', sm: '140%', lg: '75%' },
        backgroundPosition: { xs: 'right', sm: 'center', lg: 'right' },
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: '1.5rem',
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        position: 'relative',
        top: { xs: '19rem', lg: '7rem' },
        mt: theme => ({ xs: theme.spacing(-10), lg: theme.spacing(10) }),
        flexDirection: { lg: 'row' },
        maxWidth: MAX_WIDTH,
      }}>
      <Box
        sx={{
          color: theme => theme.palette.common.white,
          mb: theme => ({ xs: theme.spacing(4), lg: 0 }),
        }}>
        <Typography
          variant={matchesSmallScreen ? 'h3' : 'h1'}
          component='h2'
          sx={{
            mb: theme.spacing(2),
            mx: { xs: 'auto', lg: 0 },
            maxWidth: '33.5rem',
          }}>
          Let&apos;s talk about your project
        </Typography>
        <Typography
          variant='body2'
          sx={{
            mx: 'auto',
            maxWidth: '40rem',
          }}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </Typography>
      </Box>
      <Button onDark href='/contact'>
        Get in touch
      </Button>
    </Stack>
  )
}

export default Cta
