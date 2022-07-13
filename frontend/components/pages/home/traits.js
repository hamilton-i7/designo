import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../../../lib/media'
import { MAX_WIDTH } from '../../../lib/responsive'

const Traits = ({ traits }) => {
  return (
    <Stack
      sx={{
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        gap: theme => ({ xs: theme.spacing(10), lg: theme.spacing(3.75) }),
        flexDirection: { lg: 'row' },
        maxWidth: MAX_WIDTH,
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
        flexDirection: { sm: 'row', lg: 'column' },
        gap: theme => ({ sm: theme.spacing(2), tablet: theme.spacing(6) }),
      }}>
      <Box
        component='img'
        src={image.url}
        alt={image.alternativeText}
        sx={{
          background: `center / cover no-repeat url(${pattern.url})`,
          width: '20.2rem',
        }}
      />
      <Box
        component='section'
        sx={{
          textAlign: { xs: 'center', sm: 'start', lg: 'center' },
        }}>
        <Typography
          variant='h4'
          sx={{
            textTransform: 'uppercase',
            mb: theme => ({
              xs: theme.spacing(4),
              sm: theme.spacing(2),
              lg: theme.spacing(4),
            }),
            mt: theme => ({ xs: theme.spacing(6), lg: 0 }),
          }}>
          {trait.title}
        </Typography>
        <Typography variant='body1'>{trait.description}</Typography>
      </Box>
    </Stack>
  )
}
