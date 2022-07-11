import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from './button/button'
import { getStrapiMedia } from '../lib/media'

const Cta = ({ cta }) => {
  const pattern = getStrapiMedia(cta.pattern)

  return (
    <Stack
      component='section'
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        p: '6.4rem 2.4rem',
        background: `right / 240% no-repeat url(${pattern.url})`,
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: '1.5rem',
        mx: '2.4rem',
        position: 'relative',
        top: '4%',
        mt: '-8rem',
      }}>
      <Box sx={{ color: theme => theme.palette.common.white, mb: '3.2rem' }}>
        <Typography variant='h1' component='h2' sx={{ mb: '1.6rem' }}>
          {cta.title}
        </Typography>
        <Typography variant='body2'>{cta.description}</Typography>
      </Box>
      <Button onDark href={cta.link.url}>
        {cta.link.label}
      </Button>
    </Stack>
  )
}

export default Cta
