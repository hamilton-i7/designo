import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { getStrapiMedia } from '../lib/media'

const Designs = ({ designs }) => {
  return (
    <Grid
      container
      sx={{
        p: theme => ({ xs: theme.spacing(12, 3) }),
        gap: theme => ({ xs: theme.spacing(5) }),
      }}>
      {designs.map(design => (
        <Grid key={design.id} item xs={12} lg={4}>
          <DesignItem design={design} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Designs

const DesignItem = ({ design }) => {
  const image = getStrapiMedia(design.image)

  return (
    <Card
      elevation={0}
      sx={{ borderRadius: '1.5rem', maxWidth: '35rem', mx: 'auto' }}>
      <CardMedia
        component='img'
        image={image.url}
        alt={image.alternativeText}
        sx={{
          height: { xs: '32rem', sm: '31rem', lg: '32rem' },
        }}
      />
      <CardContent
        sx={{
          backgroundColor: theme => theme.palette.complementary.main,
          p: theme => ({ xs: theme.spacing(4) }),
          textAlign: 'center',
        }}>
        <Typography gutterBottom variant='h4' component='div' color='primary'>
          {design.title}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: theme => theme.palette.common.darkGray,
          }}>
          {design.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
