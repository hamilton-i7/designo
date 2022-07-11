import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { getStrapiMedia } from '../lib/media'
import Link from './link'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import SocialButton from './button/socialButton'

const Footer = ({ footer }) => {
  const logo = getStrapiMedia(footer.logo)
  const { address, contact } = footer

  return (
    <Stack
      component='footer'
      sx={{
        backgroundColor: theme => theme.palette.common.black,
        pt: '25rem',
      }}>
      <Stack component='nav' aria-label='footer menu'>
        <Link href={logo.href}>
          <Box component='img' src={logo.url} alt={logo.alternativeText} />
        </Link>
        <Divider
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        />
        <Stack>
          {footer.links.map(link => (
            <Link key={link.id} href={link.url}>
              <MuiLink underline='hover'>{link.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Typography variant='body1'>
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
        <Typography variant='body1'>
          <strong>
            {contact.title} ({contact.hq})
          </strong>
          <br />
          P: {contact.phone}
          <br />
          M: {contact.email}
        </Typography>
        <Stack direction='row'>
          {footer.socials.map(social => (
            <SocialButton
              key={social.id}
              socialMedia={social.name}
              url={social.url}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer
