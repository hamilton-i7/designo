import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MAX_WIDTH, useLargeScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'
import { getStrapiMedia } from '../../lib/media'

const SimpleHero = ({ hero }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  const pattern = getStrapiMedia(hero.pattern)

  return (
    <Box component='header'>
      <Stack
        sx={{
          background: `no-repeat url(${pattern.url})`,
          backgroundSize: { xs: '88rem', sm: '70rem', desktop: '64rem' },
          backgroundPosition: {
            xs: 'right top',
            sm: '-18rem -12rem',
            desktop: '-4rem -10rem',
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
          }),
          gap: theme => ({ xs: theme.spacing(3) }),
          borderRadius: { sm: '1.5rem' },
          maxWidth: MAX_WIDTH,
          textAlign: 'center',
        }}>
        <Typography variant='h1'>{hero.title}</Typography>
        <Typography variant={matchesLargeScreen ? 'body1' : 'body2'}>
          {hero.description}
        </Typography>
      </Stack>
    </Box>
  )
}

export default SimpleHero
