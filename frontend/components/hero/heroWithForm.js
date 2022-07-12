import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '../button/button'

const Form = ({ form, cta }) => {
  return (
    <Stack component='form' noValidate autoComplete='off'>
      <Stack component='section'>
        <TextField id='name' variant='standard' label={form.nameLabel} />
        <TextField
          id='email'
          type='email'
          variant='standard'
          label={form.emailLabel}
        />
        <TextField
          id='phone'
          type='tel'
          variant='standard'
          label={form.phoneLabel}
        />
        <TextField
          variant='standard'
          id='message'
          label={form.messageLabel}
          multiline
          minRows={4}
        />
      </Stack>
      <Stack component='section'>
        <Button onDark>{cta.label}</Button>
      </Stack>
    </Stack>
  )
}

const HeroWithForm = ({ hero }) => {
  return (
    <Stack component='header'>
      <Box>
        <Typography variant='h1'>{hero.title}</Typography>
        <Typography variant='body2'>{hero.description}</Typography>
      </Box>
      <Form form={hero.form} cta={hero.cta} />
    </Stack>
  )
}

export default HeroWithForm
