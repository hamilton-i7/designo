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
import { MAX_WIDTH } from '../lib/responsive'

const footerTextOpacity = 0.5

const Footer = ({ footer, ctaSpacing = true }) => {
  const logo = getStrapiMedia(footer.logo)
  const { address, contact } = footer

  return (
    <Stack
      component='footer'
      sx={{
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
          <Link href={logo.href}>
            <MuiLink
              sx={{
                width: '65%',
                maxWidth: '20.2rem',
              }}>
              <Box component='img' src={logo.url} alt={logo.alternativeText} />
            </MuiLink>
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
    </Stack>
  )
}

export default Footer
