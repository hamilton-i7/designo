import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '../button/button'
import { getStrapiMedia } from '../../lib/media'
import { alpha } from '@mui/material'

const DesignoTextField = ({ id, label, type, sx, multiline = false }) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      sx={{
        '& .MuiInput-root::before': {
          borderColor: theme => theme.palette.common.white,
        },
      }}
      variant='standard'
      color='neutral'
      multiline={multiline}
      minRows={multiline ? 5 : undefined}
      InputLabelProps={{
        sx: {
          color: theme => alpha(theme.palette.common.white, 0.5),
        },
      }}
      InputProps={{
        sx: {
          color: theme => theme.palette.common.white,
        },
      }}
    />
  )
}

const Form = ({ form, cta }) => {
  return (
    <Stack component='form' noValidate autoComplete='off'>
      <Stack
        component='section'
        sx={{
          gap: theme => theme.spacing(2),
        }}>
        <DesignoTextField id='name' label={form.nameLabel} />
        <DesignoTextField id='email' type='email' label={form.emailLabel} />
        <DesignoTextField id='phone' type='tel' label={form.phoneLabel} />
        <DesignoTextField
          variant='standard'
          id='message'
          label={form.messageLabel}
          multiline
        />
      </Stack>
      <Stack
        component='section'
        sx={{
          alignItems: 'center',
          mt: theme => theme.spacing(5),
        }}>
        <Button
          onDark
          sx={{
            p: theme => theme.spacing(2, 6),
          }}>
          {cta.label}
        </Button>
      </Stack>
    </Stack>
  )
}

const HeroWithForm = ({ hero }) => {
  const pattern = getStrapiMedia(hero.pattern)

  return (
    <Stack
      component='header'
      sx={{
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: { xs: '100%' },
        backgroundPosition: { xs: 'center' },
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.common.white,
        p: theme => theme.spacing(9, 3),
      }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: theme => theme.spacing(5),
        }}>
        <Typography
          variant='h1'
          sx={{
            mb: theme => theme.spacing(3),
          }}>
          {hero.title}
        </Typography>
        <Typography variant='body2'>{hero.description}</Typography>
      </Box>
      <Form form={hero.form} cta={hero.cta} />
    </Stack>
  )
}

export default HeroWithForm
