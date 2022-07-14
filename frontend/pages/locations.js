import React from 'react'
import DesignoMap from '../components/map'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Locations = ({ content }) => {
  const { seo, locations, cta } = content.attributes

  return (
    <>
      <Seo seo={seo} />
    </>
  )
}

export default Locations

export const getStaticProps = async () => {
  try {
    const locationRes = await fetchAPI('/location')

    return {
      props: { content: locationRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
