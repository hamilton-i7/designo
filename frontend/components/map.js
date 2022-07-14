import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const Map = ({ center }) => {
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{
        width: '100%',
        height: '50rem',
      }}>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

const DesignoMap = ({ lat, lng }) => {
  const center = { lat, lng }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map center={center} />
}

export default DesignoMap
