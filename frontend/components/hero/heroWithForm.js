import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '../button/button'
import { getStrapiMedia } from '../../lib/media'
import { alpha } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import ErrorIcon from '@mui/icons-material/Error'

const DesignoTextField = ({
  id,
  label,
  type,
  multiline = false,
  error = false,
  errorMessage = '',
  value,
  handleChange,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
      error={error}
      sx={{
        '& .MuiInputBase-root.MuiInput-root:hover::before': {
          borderBottom: theme => `0.2rem solid ${theme.palette.common.white}`,
        },
        '& .MuiInput-root::before': {
          borderColor: theme => theme.palette.common.white,
        },
        '& .MuiInput-root.Mui-error::after': {
          color: theme => theme.palette.common.white,
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
          '&.Mui-error': {
            color: 'inherit',
          },
        },
      }}
      InputProps={{
        sx: {
          color: 'inherit',
        },
        endAdornment: error && (
          <InputAdornment position='end'>
            <Stack
              direction='row'
              alignItems='center'
              sx={{
                color: theme => theme.palette.common.white,
                gap: theme => theme.spacing(1),
              }}>
              <Typography variant='overline'>{errorMessage}</Typography>
              <ErrorIcon
                sx={{
                  fontSize: '2rem',
                }}
              />
            </Stack>
          </InputAdornment>
        ),
      }}
    />
  )
}

const Form = ({ form, cta }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  })

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value })
  }
  const handleSubmit = () => {
    const fields = {}
    for (const key in errors) {
      fields[key] = !Boolean(values[key])
    }
    setErrors({ ...errors, ...fields })
  }

  return (
    <Stack component='form' noValidate autoComplete='off'>
      <Stack
        component='section'
        sx={{
          gap: theme => theme.spacing(2),
        }}>
        <DesignoTextField
          id='name'
          label={form.nameLabel}
          value={values.name}
          handleChange={handleChange('name')}
          error={errors.name}
          errorMessage={form.errorMessage}
        />
        <DesignoTextField
          id='email'
          type='email'
          label={form.emailLabel}
          value={values.email}
          handleChange={handleChange('email')}
          error={errors.email}
          errorMessage={form.errorMessage}
        />
        <DesignoTextField
          id='phone'
          type='tel'
          label={form.phoneLabel}
          value={values.phone}
          handleChange={handleChange('phone')}
          error={errors.phone}
          errorMessage={form.errorMessage}
        />
        <DesignoTextField
          variant='standard'
          id='message'
          label={form.messageLabel}
          multiline
          value={values.message}
          handleChange={handleChange('message')}
          error={errors.message}
          errorMessage={form.errorMessage}
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
          onClick={handleSubmit}
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
