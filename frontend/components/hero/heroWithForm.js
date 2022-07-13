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
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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

const Form = ({ form, onSubmit }) => {
  const [values, setValues] = useState(setupInitialFieldValues(form.fields))
  const [errors, setErrors] = useState(setupInitialFieldErros(form.fields))

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value })
  }
  const handleSubmit = () => {
    const fieldErrors = {}
    for (const key in errors) {
      fieldErrors[key] = !Boolean(values[key])
    }

    if (!EMAIL_REGEX.test(values.email)) {
      setErrors({ ...fieldErrors, email: true })
    } else {
      setErrors(fieldErrors)
    }

    // Show the success alert and cleanup the form if there are no errors in the form
    if (Object.keys(errors).every(field => !fieldErrors[field])) {
      setValues(setupInitialFieldValues(form.fields))
      onSubmit()
    }
  }

  return (
    <Stack component='form' noValidate autoComplete='off'>
      <Stack
        component='section'
        sx={{
          gap: theme => theme.spacing(2),
        }}>
        {form.fields.map(field => (
          <DesignoTextField
            key={field.name}
            id={field.name}
            label={field.label}
            type={field.type}
            value={values[field.name]}
            handleChange={handleChange(field.name)}
            error={errors[field.name]}
            errorMessage={
              values[field.name].length === 0
                ? field.emptyErrorMessage
                : field.invalidErrorMessage
            }
            multiline={field.name === 'message'}
          />
        ))}
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
          {form.button.label}
        </Button>
      </Stack>
    </Stack>
  )
}

const HeroWithForm = ({ hero, form }) => {
  const pattern = getStrapiMedia(hero.pattern)
  const [openAlert, setOpenAlert] = useState(false)

  return (
    <Box sx={{ width: '100%' }}>
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
        <Fade in={openAlert}>
          <Alert
            onClose={() => setOpenAlert(false)}
            elevation={3}
            sx={{
              alignItems: 'center',
              position: 'fixed',
              top: '5rem',
              left: 0,
              right: 0,
              mx: theme => theme.spacing(5),
              zIndex: theme => theme.zIndex.drawer + 1,
            }}>
            {form.successMessage}
          </Alert>
        </Fade>
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
        <Form form={form} onSubmit={() => setOpenAlert(true)} />
      </Stack>
    </Box>
  )
}

export default HeroWithForm

const setupInitialFieldValues = fields => {
  const values = {}

  fields.forEach(field => {
    values[field.name] = ''
  })
  return values
}

const setupInitialFieldErros = fields => {
  const errors = {}

  fields.forEach(field => {
    errors[field.name] = false
  })
  return errors
}
