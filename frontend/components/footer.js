import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'
import Link from './link'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import SocialButton from './button/socialButton'
import { alpha } from '@mui/material'

const footerTextOpacity = 0.5

const Footer = ({ footer }) => {
  const logo = getStrapiMedia(footer.logo)
  const { address, contact } = footer

  return (
    <Stack
      component='footer'
      sx={{
        backgroundColor: theme => theme.palette.common.black,
        p: { xs: '25rem 2.4rem 6.4rem', sm: '25rem 4rem 8rem' },
        color: theme => theme.palette.common.white,
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
        <Link href={logo.href}>
          <Box
            component='img'
            src={logo.url}
            alt={logo.alternativeText}
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
            my: '3.2rem',
          }}
        />
        <Stack
          sx={{
            flexDirection: { sm: 'row' },
            gap: { xs: '3.2rem', sm: '0.8rem', tablet: '4.2rem' },
          }}>
          {footer.links.map(link => (
            <Link key={link.id} href={link.url}>
              <MuiLink
                underline='hover'
                color='inherit'
                variant='subtitle2'
                textTransform='uppercase'>
                {link.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderColor: theme => alpha(theme.palette.common.white, 0.1),
          display: { xs: 'none', sm: 'block' },
          width: '100%',
          mt: '4rem',
          mb: '3.2rem',
        }}
      />
      <Stack
        sx={{
          textAlign: { xs: 'center', tablet: 'start' },
          gap: { xs: '4rem', tablet: 0 },
          mt: { xs: '4rem', sm: 0 },
          flexDirection: { tablet: 'row' },
          alignItems: { tablet: 'end' },
          justifyContent: { tablet: 'space-between' },
        }}>
        <Typography
          variant='body1'
          sx={{
            opacity: footerTextOpacity,
          }}>
          <strong>{address.hq}</strong>
          <br />
          {address.street}
          <br />
          {address.city && address.state
            ? `${address.city}, ${address.state} ${address.zipCode}`
            : address.city
            ? `${address.city} ${address.zipCode}`
            : address.state
            ? `${address.state} ${address.zipCode}`
            : address.zipCode}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            opacity: footerTextOpacity,
          }}>
          <strong>
            {contact.title} ({contact.hq})
          </strong>
          <br />
          P: {contact.phone}
          <br />
          M: {contact.email}
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          sx={{
            color: theme => theme.palette.primary.main,
          }}>
          {footer.socials.map(social => (
            <SocialButton
              key={social.id}
              socialMedia={social.name}
              url={social.url}
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
  )
}

export default Footer
