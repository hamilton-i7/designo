import Typography from '@mui/material/Typography'
import Cta from '../components/cta'
import FullHero from '../components/hero/fullHero'
import Projects from '../components/projects'
import Seo from '../components/seo'
import Traits from '../components/traits'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

const Home = ({ content }) => {
  const { seo, hero, projects, traits, cta } = content.attributes

  return (
    <>
      <Seo seo={seo} />
      <FullHero
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        image={getStrapiMedia(hero.image)}
      />
      <Projects projects={projects} />
      <Traits traits={traits} />
      <Cta cta={cta} />
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
