import { getStrapiURL } from './api'

/**
 *
 * @param {object} media The source for the image
 * @param {boolean} fromCollection Indicates whether the source is from an array of images in Strapi
 * @param {boolean} fullDetails If true, the resulting object will include the image width and height
 * @returns Object containing the image's url and alternative text
 */
export const getStrapiMedia = (
  media,
  fromCollection = false,
  fullDetails = false,
) => {
  const { url, alternativeText, height, width } = fromCollection
    ? media.attributes
    : media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return {
    url: imageUrl,
    alternativeText,
    ...(fullDetails && {
      height,
      width,
    }),
  }
}
