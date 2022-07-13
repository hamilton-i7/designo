import React from 'react'
import { fetchAPI } from '../lib/api'

const GraphicDesign = ({ content }) => {
  const { hero } = content.attributes
  return <div>{hero.title}</div>
}

export default GraphicDesign

export const getStaticProps = async () => {
  try {
    const graphicDesignRes = await fetchAPI('/graphic-design')

    return {
      props: { content: graphicDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
