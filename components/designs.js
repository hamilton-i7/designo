import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { MAX_WIDTH } from '../lib/responsive'

const Designs = ({ designs, sx }) => {
  return (
    <Box
      rowSpacing={{ xs: 5 }}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme => ({
          xs: theme.spacing(5),
          sm: theme.spacing(4),
          lg: theme.spacing(4, 3.75),
        }),
        maxWidth: MAX_WIDTH,
        ...sx,
      }}>
      {designs.map(design => (
        <Box
          key={design.name}
          sx={{
            gridColumn: { xs: 'span 3', lg: 'span 1' },
          }}>
          <DesignItem design={design} />
        </Box>
      ))}
    </Box>
  )
}

export default Designs

const DesignItem = ({ design }) => {
  return (
    <Card
      component='article'
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
        borderRadius: '1.5rem',
        width: '100%',
        cursor: 'pointer',
        ':hover .MuiCardContent-root': {
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.common.white,
          transition: theme => theme.transitions.create('background-color'),
        },
        ':hover .MuiCardContent-root > *': {
          color: theme => theme.palette.common.white,
          transition: theme => theme.transitions.create('color'),
        },
      }}>
      <CardMedia
        component='img'
        image={design.image}
        alt={design.imageAlt}
        sx={{
          height: { xs: '32rem', sm: '31rem', lg: '32rem' },
          width: { sm: '50%', lg: '100%' },
          maxWidth: { sm: '33.9rem', lg: '100%' },
        }}
      />
      <CardContent
        component='section'
        sx={{
          backgroundColor: theme => theme.palette.complementary.main,
          p: theme => ({ xs: theme.spacing(4, 3.5) }),
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Typography
          gutterBottom
          variant='h4'
          component='h3'
          color='primary'
          sx={{ textTransform: 'uppercase' }}>
          {design.name}
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
