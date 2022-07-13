import React from 'react'
import { fetchAPI } from '../lib/api'

const WebDesign = ({ content }) => {
  const { hero } = content.attributes
  return <div>{hero.title}</div>
}

export default WebDesign

export const getStaticProps = async () => {
  try {
    const webDesignRes = await fetchAPI('/web-design')

    return {
      props: { content: webDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
