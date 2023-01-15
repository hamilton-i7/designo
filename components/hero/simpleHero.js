import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MAX_WIDTH, useLargeScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'

const SimpleHero = ({ title, description, pattern }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box component='header' sx={{ width: '100%' }}>
      <Stack
        sx={{
          background: `no-repeat url(${pattern})`,
          backgroundSize: { xs: '88rem', sm: '92rem', desktop: '85rem' },
          backgroundPosition: {
            xs: 'right top',
            sm: '-4rem -18rem',
            desktop: '25rem -16rem',
          },
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.common.white,
          mx: theme => ({
            sm: theme.spacing(5),
            lg: theme.spacing(20.625),
            xl: 'auto',
          }),
          p: theme => ({
            xs: theme.spacing(13.125, 3),
            sm: theme.spacing(8, 18.125),
          }),
          gap: theme => ({ xs: theme.spacing(3) }),
          borderRadius: { sm: '1.5rem' },
          maxWidth: MAX_WIDTH,
          textAlign: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h1' sx={{ textTransform: 'capitalize' }}>
          {title}
        </Typography>
        <Typography
          variant={matchesLargeScreen ? 'body1' : 'body2'}
          sx={{
            maxWidth: '40rem',
          }}>
          {description}
        </Typography>
      </Stack>
    </Box>
  )
}

export default SimpleHero
