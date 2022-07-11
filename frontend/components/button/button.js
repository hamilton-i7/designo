import React from 'react'
import MuiButton from '@mui/material/Button'
import Link from '../link'
import { alpha } from '@mui/material'

const Button = ({ onDark, href, children }) => {
  const button = (
    <MuiButton
      variant='contained'
      disableElevation
      sx={{
        p: '1.6rem 2.4rem',
        borderRadius: '0.8rem',
        ...(onDark && {
          backgroundColor: theme => theme.palette.common.white,
          color: theme => theme.palette.common.black,
        }),
        ':hover': {
          background: theme => theme.palette.secondary.main,
          color: theme => theme.palette.common.white,
        },
      }}>
      {children}
    </MuiButton>
  )
  if (href) {
    return <Link href={href}>{button}</Link>
  }
  return button
}

export default Button
