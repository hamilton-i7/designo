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
        px: theme => ({ xs: theme.spacing(3), sm: theme.spacing(5) }),
        gap: theme => theme.spacing(10),
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
        gap: theme => ({ sm: theme.spacing(2), tablet: theme.spacing(6) }),
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
            mb: theme => ({ xs: theme.spacing(4), sm: theme.spacing(2) }),
            mt: '4.8rem',
          }}>
          {trait.title}
        </Typography>
        <Typography variant='body1'>{trait.description}</Typography>
      </Box>
    </Stack>
  )
}
