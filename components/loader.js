import { useTheme } from '@mui/material'
import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import Stack from '@mui/material/Stack'

const Loader = ({ show = false }) => {
  const theme = useTheme()

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{
        width: '100%',
        maxWidth: { desktop: '35rem' },
      }}>
      <RingLoader
        color={theme.palette.primary.main}
        loading={show}
        size={150}
      />
    </Stack>
  )
}

export default Loader
