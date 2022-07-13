import React from 'react'
import { fetchAPI } from '../lib/api'

const AppDesign = ({ content }) => {
  const { hero } = content.attributes
  return <div>{hero.title}</div>
}

export default AppDesign

export const getStaticProps = async () => {
  try {
    const appDesignRes = await fetchAPI('/app-design')

    return {
      props: { content: appDesignRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
