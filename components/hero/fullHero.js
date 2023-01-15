import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../button/button'
import { MAX_WIDTH, useLargeScreenMatcher } from '../../lib/responsive'
import { useTheme } from '@mui/material'
import Link from '../link'

const FullHero = ({ title, description, cta, image, pattern }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box component='header' sx={{ width: '100%' }}>
      <Stack
        sx={{
          position: 'relative',
          overflow: 'hidden',
          alignItems: { xs: 'center', desktop: 'end' },
          textAlign: { xs: 'center', desktop: 'start' },
          background: `no-repeat url(${pattern})`,
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
          mx: theme => ({
            sm: theme.spacing(5),
            lg: theme.spacing(20.625),
            xl: 'auto',
          }),
          borderRadius: { sm: '1.5rem' },
          flexDirection: { desktop: 'row' },
          maxWidth: MAX_WIDTH,
        }}>
        <Stack
          component='section'
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
          <Link href={cta.url}>
            <Button onDark>{cta.label}</Button>
          </Link>
        </Stack>
        <Box
          sx={{
            background: `no-repeat url(${image})`,
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
    </Box>
  )
}

export default FullHero
