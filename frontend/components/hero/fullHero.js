import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../button/button'

const FullHero = ({ title, description, cta, image, pattern }) => {
  return (
    <Stack
      component='header'
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        background: `left 65% / 150% no-repeat url(${pattern.url})`,
        backgroundColor: theme => theme.palette.primary.main,
        p: { xs: '8rem 2.4rem 0', sm: '6rem 5.8rem 0' },
        color: theme => theme.palette.common.white,
        overflow: 'hidden',
        mx: { sm: '4rem' },
        borderRadius: { sm: '1.5rem' },
      }}>
      <Typography variant='h1' sx={{ mb: '1.4rem' }}>
        {title}
      </Typography>
      <Typography variant='body2' sx={{ mb: '2.4rem' }}>
        {description}
      </Typography>
      <Button onDark href={cta.url}>
        {cta.label}
      </Button>
      <Box
        sx={{
          background: `top / 145% no-repeat url(${image.url})`,
          width: '32.7rem',
          height: '41rem',
          mt: '-8rem',
        }}
      />
    </Stack>
  )
}

export default FullHero
