import Typography from '@mui/material/Typography'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Home = ({ content }) => {
  const { seo } = content.attributes

  return (
    <>
      <Seo seo={seo} />
      <Typography variant='h1'>Designo Agency</Typography>
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
