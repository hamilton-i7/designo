import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../../lib/media'

const HeroWithImage = ({ hero }) => {
  const image = getStrapiMedia(hero.image)
  const pattern = getStrapiMedia(hero.pattern)

  return (
    <Stack component='header'>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box>
        <Typography variant='h1'>{hero.title}</Typography>
        <Typography variant='body2'>{hero.description}</Typography>
      </Box>
    </Stack>
  )
}

export default HeroWithImage
