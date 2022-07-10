import { useTheme } from '@mui/material'
import { getStrapiURL } from './api'
import { useLargeScreenMatcher, useSmallScreenMatcher } from './responsive'

/**
 *
 * @param {object} media The source for the image
 * @returns Object containing the image's url and alternative text
 */
export const getStrapiMedia = media => {
  const device = getMediaDeviceSource(media)
  const href = media.url

  const { url, alternativeText } = media[device].data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return {
    url: imageUrl,
    alternativeText,
    ...(href && {
      href,
    }),
  }
}

const getMediaDeviceSource = media => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  const device = matchesSmallScreen
    ? 'tablet'
    : matchesLargeScreen
    ? 'desktop'
    : 'mobile'

  // If mobile data or tablet data is null, return the data from the desktop source
  if (media[device].attributes || media[device].data?.attributes) {
    return device
  }
  return 'desktop'
}
