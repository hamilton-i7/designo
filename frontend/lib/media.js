import { useTheme } from '@mui/material'
import { getStrapiURL } from './api'
import { useLargeScreenMatcher, useSmallScreenMatcher } from './responsive'

/**
 *
 * @param {object} media The source for the image
 * @returns Object containing the image's url and alternative text
 */
export const useStrapiMedia = media => {
  const device = useMediaDeviceSource(media)
  const href = media.url

  const { url, alternativeText } = media[device].data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return {
    src: imageUrl,
    alternativeText,
    ...(href && {
      href,
    }),
  }
}

const useMediaDeviceSource = media => {
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  const device = matchesLargeScreen
    ? 'desktop'
    : matchesSmallScreen
    ? 'tablet'
    : 'mobile'

  // If mobile data or tablet data is null, return the data from the desktop source
  if (media[device].attributes || media[device].data?.attributes) {
    return device
  }
  return 'desktop'
}
