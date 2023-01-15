import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '../button/button'
import { useTheme } from '@mui/material'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'
import { MAX_WIDTH, useLargeScreenMatcher } from '../../lib/responsive'
import TextField from '../text-field'

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const Form = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)

  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)

  const [enableFeedback, setEnableFeedback] = useState(false)

  const handleNameChange = e => {
    setName(e.target.value)
    if (!enableFeedback) return

    setNameError(e.target.value.trim().length === 0)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    if (!enableFeedback) return

    setEmailError(!EMAIL_REGEX.test(e.target.value.trim()))
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value)
    if (!enableFeedback) return

    setPhoneError(e.target.value.trim().length === 0)
  }

  const handleMessageChange = e => {
    setMessage(e.target.value)
    if (!enableFeedback) return

    setMessageError(e.target.value.trim().length === 0)
  }

  const handleSubmit = () => {
    setEnableFeedback(true)
    if (!isValidForm()) return

    onSubmitSuccess()
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNameError(false)

    setEmail('')
    setEmailError(false)

    setPhone('')
    setPhoneError(false)

    setMessage('')
    setMessageError(false)
  }

  const isValidForm = () => {
    let isValid = true

    if (name.trim().length === 0) {
      isValid = false
      setNameError(true)
    }
    if (!EMAIL_REGEX.test(email)) {
      isValid = false
      setEmailError(true)
    }
    if (phone.trim().length === 0) {
      isValid = false
      setPhoneError(true)
    }
    if (message.trim().length === 0) {
      isValid = false
      setMessageError(true)
    }

    return isValid
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
          gap: theme => theme.spacing(3),
        }}>
        <TextField
          label='Name'
          value={name}
          handleChange={handleNameChange}
          error={nameError}
          errorMessage='Field cannot be empty'
        />
        <TextField
          label='Email Address'
          type='email'
          value={email}
          handleChange={handleEmailChange}
          error={emailError}
          errorMessage='Invalid email format'
        />
        <TextField
          label='Phone'
          type='phone'
          value={phone}
          handleChange={handlePhoneChange}
          error={phoneError}
          errorMessage='Field cannot be empty'
        />
        <TextField
          label='Message'
          value={message}
          handleChange={handleMessageChange}
          error={messageError}
          errorMessage='Field cannot be empty'
          multiline
        />
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
          Submit
        </Button>
      </Stack>
    </Stack>
  )
}

const HeroWithForm = ({ title, description }) => {
  const [openAlert, setOpenAlert] = useState(false)

  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box component='header' sx={{ width: '100%' }}>
      <Stack
        sx={{
          background:
            'no-repeat url(/contact/desktop/bg-pattern-hero-desktop.svg)',
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
            Message sent successfully!
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
            {title}
          </Typography>
          <Typography variant={matchesLargeScreen ? 'body1' : 'body2'}>
            {description}
          </Typography>
        </Box>
        <Form onSubmitSuccess={() => setOpenAlert(true)} />
      </Stack>
    </Box>
  )
}

export default HeroWithForm
