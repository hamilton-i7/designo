import axios from 'axios'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export const getStrapiURL = (path = '') =>
  `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${path}`

export const fetchAPI = async path => {
  try {
    const {
      data: { data },
    } = await axios.get(getStrapiURL(`/api${path}`))
    return data
  } catch (error) {
    console.log(error)
  }
}
