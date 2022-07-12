import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../../lib/media'
import { useTabletScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'

const HeroWithImage = ({ hero }) => {
  const image = getStrapiMedia(hero.image)
  const pattern = getStrapiMedia(hero.pattern)
  const theme = useTheme()
  const matchesTabletScreen = useTabletScreenMatcher(theme)

  return (
    <Stack
      component='header'
      sx={{
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: { xs: '85rem', tablet: '64rem' },
        backgroundPosition: {
          xs: 'right -95%',
          sm: 'right 150%',
          tablet: '-12rem -10rem',
        },
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.common.white,
        textAlign: 'center',
        mx: theme => ({ sm: theme.spacing(5) }),
        borderRadius: { sm: '1.5rem' },
        overflow: 'hidden',
      }}>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box
        sx={{
          m: theme => ({
            xs: theme.spacing(10, 3),
            tablet: theme.spacing(8, 7.25),
          }),
        }}>
        <Typography
          variant='h1'
          textTransform='capitalize'
          sx={{
            mb: theme => theme.spacing(3),
          }}>
          {hero.title}
        </Typography>
        <Typography variant={matchesTabletScreen ? 'body1' : 'body2'}>
          {hero.description}
        </Typography>
      </Box>
    </Stack>
  )
}

export default HeroWithImage
