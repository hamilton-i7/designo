import React from 'react'
import Typography from '@mui/material/Typography'

const Contact = ({ contact, sx }) => {
  return (
    <Typography variant='body1' sx={sx}>
      <strong>
        {contact.title} {contact.hq && `(${contact.hq})`}
      </strong>
      <br />
      P: {contact.phone}
      <br />
      M: {contact.email}
    </Typography>
  )
}

export default Contact
