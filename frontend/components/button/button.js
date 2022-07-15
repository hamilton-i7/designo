import React, { forwardRef } from 'react'
import MuiButton from '@mui/material/Button'
import Link from '../link'

const Button = forwardRef(({ onDark, href, onClick, children, sx }, ref) => {
  const button = (
    <MuiButton
      ref={ref}
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
})

Button.displayName = 'Button'

export default Button
