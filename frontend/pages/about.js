import React from 'react'
import Cta from '../components/cta'
import HeroWithImage from '../components/hero/heroWithImage'
import Locations from '../components/locations'
import TraitItem from '../components/pages/about/traitItem'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const About = ({ content }) => {
  const { seo, hero, traits, locations, cta } = content.attributes
  return (
    <>
      <Seo seo={seo} />
      <HeroWithImage hero={hero} />
      <main>
        <TraitItem trait={traits[0]} />
        <Locations locations={locations} />
        <TraitItem trait={traits[1]} />
        <Cta cta={cta} />
      </main>
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
