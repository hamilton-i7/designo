import React from 'react'
import Typography from '@mui/material/Typography'

const Address = ({ address, sx }) => {
  return (
    <Typography variant='body1' sx={sx}>
      <strong>{address.hq}</strong>
      <br />
      {address.street}
      <br />
      {address.city && address.state
        ? `${address.city}, ${address.state} ${address.zipCode}`
        : address.city
        ? `${address.city} ${address.zipCode}`
        : address.state
        ? `${address.state} ${address.zipCode}`
        : address.zipCode}
    </Typography>
  )
}

export default Address
