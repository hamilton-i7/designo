import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLargeScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'

const SimpleHero = ({ hero }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box component='header'>
      <Stack>
        <Typography variant='h1'>{hero.title}</Typography>
        <Typography variant={matchesLargeScreen ? 'body1' : 'body2'}>
          {hero.description}
        </Typography>
      </Stack>
    </Box>
  )
}

export default SimpleHero
