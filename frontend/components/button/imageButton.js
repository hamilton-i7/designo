import { styled } from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '../link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos'
import { getStrapiMedia } from '../../lib/media'

const ImageButton = ({ project, sx }) => {
  const backgroundImage = getStrapiMedia(project.image)

  return (
    <Link href={project.url}>
      <ButtonBase
        sx={{
          position: 'relative',
          ...sx,
        }}>
        <ImageSrc url={backgroundImage.url} />
        <ImageText
          primary={project.primaryText}
          secondary={project.secondaryText}
        />
      </ButtonBase>
    </Link>
  )
}

export default ImageButton

const ImageSrc = styled('span', {
  shouldForwardProp: prop => prop !== 'url',
})(({ url }) => ({
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  ...(url && {
    background: `center / cover no-repeat url(${url})`,
  }),
}))

const ImageText = ({ primary, secondary }) => {
  return (
    <Stack
      component='section'
      alignItems='center'
      justifyContent='center'
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}>
      <Typography variant='h2'>{primary}</Typography>
      <Stack direction='row' alignItems='center'>
        <Typography variant='body2'>{secondary}</Typography>
        <ArrowForwardIcon />
      </Stack>
    </Stack>
  )
}
