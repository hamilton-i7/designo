import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'

const Traits = ({ traits }) => {
  return (
    <Stack
      component='aside'
      sx={{
        px: { xs: '2.4rem', sm: '4rem' },
        gap: '8rem',
      }}>
      {traits.map(trait => (
        <TraitItem key={trait.id} trait={trait} />
      ))}
    </Stack>
  )
}

export default Traits

const TraitItem = ({ trait }) => {
  const image = getStrapiMedia(trait.image)
  const pattern = getStrapiMedia(trait.pattern)
  return (
    <Stack
      alignItems='center'
      sx={{
        flexDirection: { sm: 'row' },
        gap: { sm: '1.6rem', tablet: '4.8rem' },
      }}>
      <Box
        component='img'
        src={image.url}
        alt={image.alternativeText}
        sx={{
          background: `center / cover no-repeat url(${pattern.url})`,
          width: '65%',
          maxWidth: '20.2rem',
        }}
      />
      <Box
        component='section'
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
        }}>
        <Typography
          variant='h4'
          sx={{
            textTransform: 'uppercase',
            mb: { xs: '3.2rem', sm: '1.6rem' },
            mt: '4.8rem',
          }}>
          {trait.title}
        </Typography>
        <Typography variant='body1'>{trait.description}</Typography>
      </Box>
    </Stack>
  )
}
