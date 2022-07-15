import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../lib/media'
import Button from '../components/button/button'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import { MAX_WIDTH } from '../lib/responsive'

const Designo404 = ({ content }) => {
  const { seo, title, description, link, image } = content.attributes
  const notFoundImage = getStrapiMedia(image)

  return (
    <Stack
      sx={{
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        my: theme => theme.spacing(8),
        gap: theme => theme.spacing(5),
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        justifyContent: 'center',
        maxWidth: MAX_WIDTH,
        flex: 1,
      }}>
      <Seo seo={seo} />
      <Box
        component='img'
        src={notFoundImage.url}
        alt={notFoundImage.alternativeText}
        sx={{
          width: { md: '50%' },
        }}
      />
      <Stack
        sx={{
          textAlign: 'center',
          gap: theme => theme.spacing(3),
          width: { md: '50%' },
          alignItems: 'center',
        }}>
        <Typography variant='h1' color='primary'>
          {title}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
        <Button href={link.url}>{link.label}</Button>
      </Stack>
    </Stack>
  )
}

export default Designo404

export const getStaticProps = async () => {
  try {
    const notFoundRes = await fetchAPI('/not-found')

    return {
      props: { content: notFoundRes },
    }
  } catch (error) {
    return { notFound: true }
  }
}
