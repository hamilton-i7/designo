import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '../button/button'
import { useStrapiMedia } from '../../lib/media'
import { alpha, useTheme } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import ErrorIcon from '@mui/icons-material/Error'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'
import { MAX_WIDTH, useLargeScreenMatcher } from '../../lib/responsive'

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
      fullWidth
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
      minRows={multiline ? 5 : ''}
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

const Form = ({ form, onSubmitSuccess }) => {
  const [values, setValues] = useState(setupInitialFieldValues(form.fields))
  const [errors, setErrors] = useState(setupInitialFieldErros(form.fields))
  const [enableFeedback, setEnableFeedback] = useState(false)

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value })

    if (enableFeedback) {
      setErrors({
        ...errors,
        [prop]: !validateField(e.target.value, prop === 'email'),
      })
    }
  }

  const handleSubmit = () => {
    setEnableFeedback(true)
    const fieldErrors = {}

    // Validate each field and turn on its error state if necessary
    for (const key in errors) {
      fieldErrors[key] = !validateField(values[key], key === 'email')
    }
    setErrors({ ...fieldErrors })

    if (Object.keys(fieldErrors).some(key => fieldErrors[key])) return

    setValues(setupInitialFieldValues(form.fields))
    setEnableFeedback(false)
    onSubmitSuccess()
  }

  return (
    <Stack
      component='form'
      noValidate
      autoComplete='off'
      sx={{
        width: { desktop: '100%' },
      }}>
      <Stack
        component='section'
        sx={{
          alignItems: 'center',
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
          mt: theme => ({ xs: theme.spacing(5), sm: theme.spacing(3) }),
        }}>
        <Button
          onDark
          onClick={handleSubmit}
          sx={{
            p: theme => theme.spacing(2, 6),
            alignSelf: { sm: 'end' },
          }}>
          {form.button.label}
        </Button>
      </Stack>
    </Stack>
  )
}

const HeroWithForm = ({ hero, form }) => {
  const pattern = useStrapiMedia(hero.pattern)
  const [openAlert, setOpenAlert] = useState(false)

  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box component='header' sx={{ width: '100%' }}>
      <Stack
        sx={{
          background: `no-repeat url(${pattern.src})`,
          backgroundSize: { xs: '80rem', sm: '70rem', desktop: '64rem' },
          backgroundPosition: {
            xs: '18% top',
            sm: '-18rem -12rem',
            desktop: '-4rem -10rem',
          },
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.common.white,
          p: theme => ({
            xs: theme.spacing(9, 3),
            sm: theme.spacing(9, 7.25),
            lg: theme.spacing(8, 20.625),
            desktop: theme.spacing(8, 12),
          }),
          mx: theme => ({
            sm: theme.spacing(5),
            lg: theme.spacing(20.625),
            xl: 'auto',
          }),
          gap: theme => ({ desktop: theme.spacing(12) }),
          borderRadius: { sm: '1.5rem' },
          flexDirection: { desktop: 'row' },
          alignItems: { desktop: 'center' },
          maxWidth: MAX_WIDTH,
        }}>
        <Fade in={openAlert}>
          <Alert
            onClose={() => setOpenAlert(false)}
            elevation={3}
            sx={{
              alignItems: 'center',
              position: 'absolute',
              top: { xs: '11rem', lg: '16rem' },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: theme => theme.zIndex.drawer + 1,
              maxWidth: '30rem',
              width: '80%',
            }}>
            {form.successMessage}
          </Alert>
        </Fade>
        <Box
          component='section'
          sx={{
            textAlign: { xs: 'center', sm: 'start' },
            mb: theme => theme.spacing(5),
            width: { desktop: '100%' },
          }}>
          <Typography
            variant='h1'
            sx={{
              mb: theme => theme.spacing(3),
              textTransform: 'capitalize',
            }}>
            {hero.title}
          </Typography>
          <Typography variant={matchesLargeScreen ? 'body1' : 'body2'}>
            {hero.description}
          </Typography>
        </Box>
        <Form form={form} onSubmitSuccess={() => setOpenAlert(true)} />
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

const validateField = (field, isEmail = false) => {
  if (isEmail) {
    return EMAIL_REGEX.test(field)
  }
  return Boolean(field)
}
