import React from 'react'
import Typography from '@mui/material/Typography'

const Address = ({ hq, street, city }) => {
  return (
    <Typography
      variant='body1'
      sx={{
        opacity: 0.5,
      }}>
      <strong>{hq}</strong>
      <br />
      {street}
      <br />
      {city}
    </Typography>
  )
}

export default Address
