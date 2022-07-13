import Box from '@mui/material/Box'
import { useContext } from 'react'
import Cta from '../components/cta'
import FullHero from '../components/hero/fullHero'
import Projects from '../components/projects'
import Seo from '../components/seo'
import Traits from '../components/pages/home/traits'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { GlobalContext } from './_app'

export const LeafPatternTop = ({ pattern }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        left: 0,
        top: '48rem',
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
      }}
    />
  )
}

const LeafPatternBottom = ({ pattern }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '102rem',
        height: '59.4rem',
        right: 0,
        top: '188rem',
        display: { xs: 'none', lg: 'block' },
        zIndex: -1,
        '::before': {
          content: '""',
          position: 'absolute',
          right: 0,
          bottom: 0,
          background: `no-repeat url(${pattern.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(180deg)',
          width: '100%',
          height: '100%',
        },
      }}
    />
  )
}

const Home = ({ content }) => {
  const { seo, hero, projects, traits, cta } = content.attributes
  const { backgroundPattern } = useContext(GlobalContext)
  const pattern = getStrapiMedia(backgroundPattern)

  return (
    <>
      <Seo seo={seo} />
      <LeafPatternTop pattern={pattern} />
      <FullHero
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        image={getStrapiMedia(hero.image)}
        pattern={getStrapiMedia(hero.pattern)}
      />
      <main>
        <Projects projects={projects} />
        <Traits traits={traits} />
        <Cta cta={cta} />
      </main>
      <LeafPatternBottom pattern={pattern} />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  try {
    const homeRes = await fetchAPI('/home')

    return {
      props: { content: homeRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
