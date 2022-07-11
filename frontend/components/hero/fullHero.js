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
        background: `no-repeat url(${pattern.url})`,
        backgroundPosition: { xs: 'left 65%', tablet: '155% 65%' },
        backgroundSize: { xs: '150%', tablet: '81%' },
        backgroundColor: theme => theme.palette.primary.main,
        p: theme => ({
          xs: theme.spacing(10, 3, 0),
          sm: theme.spacing(7.5, 7.25, 0),
        }),
        color: theme => theme.palette.common.white,
        overflow: 'hidden',
        mx: theme => ({ sm: theme.spacing(5) }),
        borderRadius: { sm: '1.5rem' },
      }}>
      <Typography variant='h1' sx={{ mb: theme => theme.spacing(1.75) }}>
        {title}
      </Typography>
      <Typography variant='body2' sx={{ mb: theme => theme.spacing(3) }}>
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
          mt: theme => theme.spacing(-10),
        }}
      />
    </Stack>
  )
}

export default FullHero
