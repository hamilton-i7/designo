import React from 'react'
import MuiButton from '@mui/material/Button'
import Link from '../link'

const Button = ({ onDark, href, children }) => {
  const button = (
    <MuiButton
      variant='contained'
      sx={{
        ...(onDark && {
          backgroundColor: theme => theme.palette.common.white,
          color: theme => theme.palette.common.black,
        }),
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
