import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../button/button'

const FullHero = ({ title, description, cta, image }) => {
  return (
    <Stack
      component='header'
      sx={{ alignItems: 'center', textAlign: 'center' }}>
      <Typography variant='h1'>{title}</Typography>
      <Typography component='body1'>{description}</Typography>
      <Button onDark href={cta.url}>
        {cta.label}
      </Button>
      <Box component='img' src={image.url} alt={image.alternativeText} />
    </Stack>
  )
}

export default FullHero
