import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import { getStrapiMedia } from '../../../lib/media'

const TraitItem = ({ trait }) => {
  const image = getStrapiMedia(trait.image)

  return (
    <Stack>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box>
        <Typography variant='h1' component='h2'>
          {trait.title}
        </Typography>
        <Typography variant='body2'>{trait.description}</Typography>
      </Box>
    </Stack>
  )
}

export default TraitItem
