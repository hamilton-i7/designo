import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import {
  useDesktopScreenMatcher,
  useSmallScreenMatcher,
} from '../lib/responsive'
import { useTheme } from '@mui/material'
import Loader from './loader'

const Map = ({ center }) => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const matchesDesktopScreen = useDesktopScreenMatcher(theme)

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerStyle={{
        width: '100%',
        height: matchesSmallScreen ? '32.6rem' : '32rem',
        borderRadius: matchesSmallScreen ? '1.5rem' : 0,
        maxWidth: matchesDesktopScreen ? '35rem' : 'initial',
      }}>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

const DesignoMap = ({ lat, lng }) => {
  const center = useMemo(() => ({ lat, lng }), [lat, lng])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <Loader show={isLoaded} />
  return <Map center={center} />
}

export default DesignoMap
