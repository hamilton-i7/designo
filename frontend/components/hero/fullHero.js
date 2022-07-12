import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../button/button'
import { useLargeScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'

const FullHero = ({ title, description, cta, image, pattern }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Stack
      component='header'
      sx={{
        alignItems: { xs: 'center', desktop: 'end' },
        textAlign: { xs: 'center', desktop: 'start' },
        background: `no-repeat url(${pattern.url})`,
        position: 'relative',
        backgroundPosition: {
          xs: 'left 65%',
          tablet: '155% 65%',
          desktop: 'right',
        },
        backgroundSize: { xs: '150%', tablet: '81%', desktop: '65rem' },
        backgroundColor: theme => theme.palette.primary.main,
        p: theme => ({
          xs: theme.spacing(10, 3, 0),
          sm: theme.spacing(7.5, 7.25, 0),
          desktop: theme.spacing(0, 12),
        }),
        color: theme => theme.palette.common.white,
        overflow: 'hidden',
        mx: theme => ({
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: theme.spacing(40),
        }),
        borderRadius: { sm: '1.5rem' },
        flexDirection: { desktop: 'row' },
      }}>
      <Stack
        sx={{
          maxWidth: { desktop: '54rem' },
          gap: theme => ({ desktop: theme.spacing(4) }),
          alignItems: { xs: 'center', desktop: 'start' },
          my: theme => ({ desktop: theme.spacing(16.125) }),
        }}>
        <Typography variant='h1' sx={{ mb: theme => theme.spacing(1.75) }}>
          {title}
        </Typography>
        <Typography
          variant={matchesLargeScreen ? 'body1' : 'body2'}
          sx={{
            mb: theme => theme.spacing(3),
            maxWidth: { desktop: '44.5rem' },
          }}>
          {description}
        </Typography>
        <Button onDark href={cta.url}>
          {cta.label}
        </Button>
      </Stack>
      <Box
        sx={{
          background: `no-repeat url(${image.url})`,
          backgroundPosition: { xs: 'top' },
          backgroundSize: { xs: '145%' },
          width: { xs: '32.7rem' },
          height: { xs: '41rem' },
          mt: theme => ({ xs: theme.spacing(-10) }),
          [theme.breakpoints.up('desktop')]: {
            backgroundPosition: 'center',
            backgroundSize: '68rem',
            position: 'absolute',
            right: '-4rem',
            top: '-5rem',
            height: '91rem',
            mt: 0,
            width: '50%',
          },
        }}
      />
    </Stack>
  )
}

export default FullHero
