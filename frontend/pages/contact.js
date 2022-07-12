import React from 'react'
import HeroWithForm from '../components/hero/heroWithForm'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Contact = ({ content }) => {
  const { seo, hero } = content.attributes
  return (
    <>
      <Seo seo={seo} />
      <HeroWithForm hero={hero} />
    </>
  )
}

export default Contact

export const getStaticProps = async () => {
  try {
    const contactRes = await fetchAPI('/contact')

    return {
      props: { content: contactRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
