import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YoutubeIcon from '@mui/icons-material/Youtube'
import IconButton from '@mui/material/IconButton'

const SocialButton = ({ socialMedia, url, sx }) => {
  let icon = ''
  switch (socialMedia) {
    case 'facebook':
      icon = <FacebookIcon fontSize='inherit' />
      break
    case 'instagram':
      icon = <InstagramIcon fontSize='inherit' />
      break
    case 'twitter':
      icon = <TwitterIcon fontSize='inherit' />
      break
    case 'youtube':
      icon = <YoutubeIcon fontSize='inherit' />
      break
    default:
      icon = <PinterestIcon fontSize='inherit' />
  }
  return (
    <IconButton
      href={url}
      sx={{
        fontSize: '2.4rem',
        color: 'inherit',
        ...sx,
      }}>
      {icon}
    </IconButton>
  )
}

export default SocialButton
