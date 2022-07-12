import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getStrapiMedia } from '../../../lib/media'
import { splitText } from '../../../lib/text'
import { useTabletScreenMatcher } from '../../../lib/responsive'
import { useTheme } from '@mui/material'

const TraitItem = ({ trait }) => {
  const image = getStrapiMedia(trait.image)
  const pattern = getStrapiMedia(trait.pattern)
  const paragraphs = splitText(trait.description)

  const theme = useTheme()
  const matchesTabletScreen = useTabletScreenMatcher(theme)

  return (
    <Stack
      component='section'
      sx={{
        background: `no-repeat url(${pattern.url})`,
        backgroundSize: '55rem',
        backgroundPosition: 'left bottom',
        backgroundColor: theme => theme.palette.complementary.main,
        overflow: 'hidden',
        borderRadius: { sm: '1.5rem' },
        mx: theme => ({ sm: theme.spacing(5) }),
      }}>
      <Box component='img' src={image.url} alt={image.alternativeText} />
      <Box
        sx={{
          m: theme => ({
            xs: theme.spacing(10, 3),
            tablet: theme.spacing(8, 7.25),
          }),
          textAlign: 'center',
        }}>
        <Typography
          variant='h1'
          component='h2'
          sx={{
            color: theme => theme.palette.primary.main,
            mb: theme => theme.spacing(3),
          }}>
          {trait.title}
        </Typography>
        <Typography
          variant={matchesTabletScreen ? 'body1' : 'body2'}
          sx={{
            color: theme => theme.palette.common.darkGray,
          }}>
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {/* Add a line breaks unless it's the last paragraph */}
              {index !== paragraphs.length - 1 && (
                <>
                  <br /> <br />
                </>
              )}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
    </Stack>
  )
}

export default TraitItem
