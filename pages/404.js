import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '../components/button/button'
import Seo from '../components/seo'
import { MAX_WIDTH } from '../lib/responsive'
import Link from '../components/link'

const Designo404 = () => {
  return (
    <Stack
      sx={{
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        my: theme => theme.spacing(8),
        gap: theme => theme.spacing(5),
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        justifyContent: 'center',
        maxWidth: MAX_WIDTH,
        flex: 1,
      }}>
      <Seo description='Seems like you lost your way' />
      <Box
        component='img'
        src='/shared/404.svg'
        alt='Sad emoji'
        sx={{
          width: { md: '50%' },
        }}
      />
      <Stack
        sx={{
          textAlign: 'center',
          gap: theme => theme.spacing(3),
          width: { md: '50%' },
          alignItems: 'center',
        }}>
        <Typography variant='h1' color='primary'>
          Are you lost?
        </Typography>
        <Typography variant='body1'>Seems like you lost your way</Typography>
        <Link href='/'>
          <Button>Go back home</Button>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Designo404
