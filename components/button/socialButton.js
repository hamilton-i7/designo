import React from 'react'
import IconButton from '@mui/material/IconButton'

const SocialButton = ({ icon, sx }) => {
  return (
    <IconButton
      sx={{
        color: 'inherit',
        ...sx,
      }}>
      {icon}
    </IconButton>
  )
}

export default SocialButton
