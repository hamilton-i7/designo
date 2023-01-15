import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MAX_WIDTH } from '../../../lib/responsive'

const Traits = () => {
  return (
    <Stack
      sx={{
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        gap: theme => ({ xs: theme.spacing(10), lg: theme.spacing(3.75) }),
        flexDirection: { lg: 'row' },
        maxWidth: MAX_WIDTH,
      }}>
      <TraitItem
        image='/home/desktop/illustration-passionate.svg'
        imgAlt='Man with orange hoodie designing'
        pattern='/shared/desktop/bg-pattern-small-circle.svg'
        title='Passionate'
        description='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
      />
      <TraitItem
        image='/home/desktop/illustration-resourceful.svg'
        imgAlt='Man with orange hoodie designing'
        pattern='/shared/desktop/bg-pattern-small-circle.svg'
        title='Resourceful'
        description='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
      />
      <TraitItem
        image='/home/desktop/illustration-friendly.svg'
        imgAlt='Two people holding a sign'
        pattern='/shared/desktop/bg-pattern-small-circle.svg'
        title='Friendly'
        description=' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
      />
    </Stack>
  )
}

export default Traits

const TraitItem = ({ image, imgAlt, pattern, title, description }) => {
  return (
    <Stack
      alignItems='center'
      sx={{
        flexDirection: { sm: 'row', lg: 'column' },
        gap: theme => ({ sm: theme.spacing(2), tablet: theme.spacing(6) }),
      }}>
      <Box
        component='img'
        src={image}
        alt={imgAlt}
        sx={{
          background: `center / cover no-repeat url(${pattern})`,
          width: '20.2rem',
        }}
      />
      <Box
        component='section'
        sx={{
          textAlign: { xs: 'center', sm: 'start', lg: 'center' },
        }}>
        <Typography
          variant='h4'
          component='h3'
          sx={{
            textTransform: 'uppercase',
            mb: theme => ({
              xs: theme.spacing(4),
              sm: theme.spacing(2),
              lg: theme.spacing(4),
            }),
            mt: theme => ({ xs: theme.spacing(6), lg: 0 }),
          }}>
          {title}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </Box>
    </Stack>
  )
}
