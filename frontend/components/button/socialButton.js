import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YoutubeIcon from '@mui/icons-material/YouTube'
import IconButton from '@mui/material/IconButton'

const SocialButton = ({ socialMedia, url, sx }) => {
  let icon = ''
  switch (socialMedia) {
    case 'facebook':
      icon = <FacebookIcon fontSize='inherit' titleAccess='facebook' />
      break
    case 'instagram':
      icon = <InstagramIcon fontSize='inherit' titleAccess='instagram' />
      break
    case 'twitter':
      icon = <TwitterIcon fontSize='inherit' titleAccess='twitter' />
      break
    case 'youtube':
      icon = <YoutubeIcon fontSize='inherit' titleAccess='youtube' />
      break
    default:
      icon = <PinterestIcon fontSize='inherit' titleAccess='pinterest' />
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
