import React from 'react'
import HeroWithImage from '../components/hero/heroWithImage'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const About = ({ content }) => {
  const { seo, hero } = content.attributes
  return (
    <>
      <Seo seo={seo} />
      <HeroWithImage hero={hero} />
    </>
  )
}

export default About

export const getStaticProps = async () => {
  try {
    const aboutRes = await fetchAPI('/about')

    return {
      props: { content: aboutRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
