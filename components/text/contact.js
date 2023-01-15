import React from 'react'
import Typography from '@mui/material/Typography'

const Contact = ({ phone, email, simpleTitle }) => {
  return (
    <Typography
      variant='body1'
      sx={{
        opacity: 0.5,
      }}>
      <strong>{simpleTitle ? 'Contact' : 'Contact Us (Central Office)'}</strong>
      <br />
      P: {phone}
      <br />
      M: {email}
    </Typography>
  )
}

export default Contact
