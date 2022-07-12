import React from 'react'
import MuiButton from '@mui/material/Button'
import Link from '../link'

const Button = ({ onDark, href, onClick, children, sx }) => {
  const button = (
    <MuiButton
      variant='contained'
      disableElevation
      onClick={onClick}
      sx={{
        p: '1.6rem 2.4rem',
        borderRadius: '0.8rem',
        color: theme => theme.palette.common.white,
        ...(onDark && {
          backgroundColor: theme => theme.palette.common.white,
          color: theme => theme.palette.common.black,
        }),
        ':hover': {
          background: theme => theme.palette.secondary.main,
          color: theme => theme.palette.common.white,
        },
        ...sx,
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
