import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTabletScreenMatcher, MAX_WIDTH } from '../../lib/responsive'
import { useTheme } from '@mui/material'

const HeroWithImage = ({ title, description, image, imageAlt, pattern }) => {
  const theme = useTheme()
  const matchesTabletScreen = useTabletScreenMatcher(theme)

  return (
    <Box component='header' sx={{ width: '100%' }}>
      <Stack
        sx={{
          overflow: 'hidden',
          background: `no-repeat url(${pattern})`,
          backgroundSize: { xs: '85rem', tablet: '64rem', desktop: '63rem' },
          backgroundPosition: {
            xs: 'right -95%',
            sm: 'right 150%',
            tablet: '-12rem -10rem',
            lg: '1rem -16rem',
            desktop: '2rem -15rem',
          },
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.common.white,
          mx: theme => ({
            sm: theme.spacing(5),
            lg: theme.spacing(20.625),
            lg: 'auto',
          }),
          borderRadius: { sm: '1.5rem' },
          flexDirection: { lg: 'row-reverse' },
          gap: theme => ({
            lg: theme.spacing(5),
            desktop: theme.spacing(10.25),
          }),
          maxWidth: MAX_WIDTH,
        }}>
        <Box
          component='img'
          src={image}
          alt={imageAlt}
          sx={{ width: { lg: '45%', desktop: '100%' } }}
        />
        <Box
          sx={{
            m: theme => ({
              xs: theme.spacing(10, 3),
              tablet: theme.spacing(8, 7.25),
              desktop: theme.spacing(16.875, 11.875),
            }),
            mr: { desktop: 0 },
            textAlign: { xs: 'center', lg: 'start' },
          }}>
          <Typography
            variant='h1'
            textTransform='capitalize'
            sx={{
              mb: theme => ({ xs: theme.spacing(3), lg: theme.spacing(4) }),
            }}>
            {title}
          </Typography>
          <Typography variant={matchesTabletScreen ? 'body1' : 'body2'}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default HeroWithImage
