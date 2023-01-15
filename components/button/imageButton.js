import { styled } from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '../link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos'

const ImageButton = ({ project, sx }) => {
  return (
    <Link href={project.url}>
      <ButtonBase
        aria-label={project.text}
        sx={{
          borderRadius: '1.5rem',
          color: theme => theme.palette.common.white,
          textTransform: 'uppercase',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
              opacity: 0.5,
              backgroundColor: theme => theme.palette.primary.main,
            },
          },
          minHeight: { xs: '25rem', sm: '20rem', lg: '30.8rem' },
          width: 'auto',
          ...sx,
        }}>
        <ImageSrc url={project.imgSrc} />
        <ImageBackdrop className='MuiImageBackdrop-root' />
        <ImageText primary={project.text} secondary='View projects' />
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

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.45,
  transition: theme.transitions.create(['background-color', 'opacity']),
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
      <Typography variant='h2' mb='1.2rem'>
        {primary}
      </Typography>
      <Stack direction='row' gap='1.6rem' alignItems='center'>
        <Typography variant='h5' component='span'>
          {secondary}
        </Typography>
        <ArrowForwardIcon
          sx={{
            fontSize: '0.8rem',
            color: theme => theme.palette.primary.main,
          }}
        />
      </Stack>
    </Stack>
  )
}
