import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Link from './link'
import Divider from '@mui/material/Divider'
import SocialButton from './button/socialButton'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material'
import { MAX_WIDTH } from '../lib/responsive'
import Address from './text/address'
import Contact from './text/contact'
import { useRouter } from 'next/router'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YoutubeIcon from '@mui/icons-material/YouTube'

const ctaSpacingPages = ['/contact', '/404']
const navItems = [
  { label: 'Our company', url: '/about' },
  { label: 'Locations', url: '/locations' },
  { label: 'Contact', url: '/contact' },
]
const socials = [
  <FacebookIcon sx={{ fontSize: '2.4rem' }} />,
  <TwitterIcon sx={{ fontSize: '2.4rem' }} />,
  <InstagramIcon sx={{ fontSize: '2.4rem' }} />,
  <PinterestIcon sx={{ fontSize: '2.4rem' }} />,
  <YoutubeIcon sx={{ fontSize: '2.4rem' }} />,
]

const Footer = ({ footer }) => {
  const router = useRouter()
  const ctaSpacing = !ctaSpacingPages.includes(router.pathname)

  return (
    <Stack
      component='footer'
      sx={{
        alignItems: 'center',
        backgroundColor: theme => theme.palette.common.black,
        p: theme =>
          ctaSpacing
            ? {
                xs: theme.spacing(31.25, 3, 8),
                sm: theme.spacing(31.25, 5, 10),
                lg: theme.spacing(31.25, 20.625, 9),
              }
            : {
                xs: theme.spacing(8, 3),
                sm: theme.spacing(8, 5, 10),
                lg: theme.spacing(8, 20.625, 9),
              },
        color: theme => theme.palette.common.white,
        mt: 'auto',
        width: '100%',
      }}>
      <Stack
        sx={{
          maxWidth: MAX_WIDTH,
          mx: { tv: 'auto' },
          width: '100%',
        }}>
        <Stack
          component='nav'
          aria-label='footer menu'
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: { sm: 'row' },
            justifyContent: { sm: 'space-between' },
          }}>
          <Link href='/'>
            <Box
              component='img'
              src='/shared/desktop/logo-light.png'
              alt='Designo logo'
              sx={{
                width: '65%',
                maxWidth: '20.2rem',
              }}
            />
          </Link>
          <Divider
            sx={{
              borderColor: theme => alpha(theme.palette.common.white, 0.1),
              display: { xs: 'block', sm: 'none' },
              width: '100%',
              my: theme => theme.spacing(4),
            }}
          />
          <Stack
            sx={{
              flexDirection: { sm: 'row' },
              gap: theme => ({
                xs: theme.spacing(4),
                sm: theme.spacing(1),
                tablet: theme.spacing(5.25),
              }),
            }}>
            {navItems.map(item => (
              <Link href={item.url}>
                <Typography
                  key={item.label}
                  variant='subtitle2'
                  sx={{
                    color: theme => theme.palette.common.black,
                    textTransform: 'uppercase',
                  }}>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Divider
          sx={{
            borderColor: theme => alpha(theme.palette.common.white, 0.1),
            display: { xs: 'none', sm: 'block' },
            width: '100%',
            mt: theme => theme.spacing(5),
            mb: theme => theme.spacing(4),
          }}
        />
        <Stack
          sx={{
            textAlign: { xs: 'center', tablet: 'start' },
            gap: theme => ({ xs: theme.spacing(5), tablet: 0 }),
            mt: theme => ({ xs: theme.spacing(5), sm: 0 }),
            flexDirection: { tablet: 'row' },
            alignItems: { tablet: 'end' },
            justifyContent: { tablet: 'space-between' },
          }}>
          <Address
            hq='Designo Central Office'
            street='3886 Wellington Street'
            city='Toronto, Ontario M9C 3J5'
          />
          <Contact
            simpleTitle={false}
            phone='+1 253-863-8967'
            email='contact@designo.ca'
          />
          <Stack
            direction='row'
            justifyContent='center'
            sx={{
              color: theme => theme.palette.primary.main,
            }}>
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                icon={social}
                sx={{
                  ':hover': {
                    color: theme => theme.palette.secondary.main,
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer
