import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'

const Traits = ({ traits }) => {
  return (
    <Stack component='section'>
      {traits.map(trait => (
        <TraitItem key={trait.id} trait={trait} />
      ))}
    </Stack>
  )
}

export default Traits

const TraitItem = ({ trait }) => {
  const image = getStrapiMedia(trait.image)
  return (
    <Stack>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box>
        <Typography variant='h3'>{trait.title}</Typography>
        <Typography variant='body1'>{trait.description}</Typography>
      </Box>
    </Stack>
  )
}
