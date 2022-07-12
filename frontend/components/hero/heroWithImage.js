import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../../lib/media'

const HeroWithImage = ({ hero }) => {
  const image = getStrapiMedia(hero.image)
  const pattern = getStrapiMedia(hero.pattern)

  return (
    <Stack
      component='header'
      sx={{
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: '85rem',
        backgroundPosition: '100% -95%',
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.common.white,
        textAlign: 'center',
      }}>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box
        sx={{
          m: theme => theme.spacing(10, 3),
        }}>
        <Typography
          variant='h1'
          textTransform='capitalize'
          sx={{
            mb: theme => theme.spacing(3),
          }}>
          {hero.title}
        </Typography>
        <Typography variant='body2'>{hero.description}</Typography>
      </Box>
    </Stack>
  )
}

export default HeroWithImage
