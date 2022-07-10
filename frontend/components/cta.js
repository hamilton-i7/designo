import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from './button/button'

const Cta = ({ cta }) => {
  return (
    <Stack component='section' sx={{ textAlign: 'center' }}>
      <Box>
        <Typography variant='h1' component='h2'>
          {cta.title}
        </Typography>
        <Typography variant='body1'>{cta.description}</Typography>
      </Box>
      <Button onDark href={cta.link.url}>
        {cta.link.label}
      </Button>
    </Stack>
  )
}

export default Cta
