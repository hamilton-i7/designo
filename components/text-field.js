import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MuiTextField from '@mui/material/TextField'
import { alpha } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import ErrorIcon from '@mui/icons-material/Error'

const TextField = ({
  label,
  type = 'text',
  multiline = false,
  error = false,
  errorMessage = '',
  value,
  handleChange,
}) => {
  return (
    <MuiTextField
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
export default TextField
