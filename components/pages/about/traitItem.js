import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { splitText } from '../../../lib/text'
import { MAX_WIDTH, useTabletScreenMatcher } from '../../../lib/responsive'
import { useTheme } from '@mui/material'

const TraitItem = ({
  image,
  imageAlt,
  pattern,
  title,
  description,
  reverseLayout = false,
}) => {
  const paragraphs = splitText(description)

  const theme = useTheme()
  const matchesTabletScreen = useTabletScreenMatcher(theme)

  return (
    <Stack
      component='section'
      sx={{
        background: `no-repeat url(${pattern})`,
        backgroundSize: '55rem',
        backgroundPosition: {
          xs: 'left bottom',
          lg: reverseLayout ? 'left bottom' : '35rem bottom',
        },
        backgroundColor: theme => theme.palette.complementary.main,
        overflow: 'hidden',
        borderRadius: { sm: '1.5rem' },
        mx: theme => ({
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        flexDirection: { lg: reverseLayout ? 'row-reverse' : 'row' },
        maxWidth: MAX_WIDTH,
      }}>
      <Box
        component='img'
        src={image}
        alt={imageAlt}
        sx={{
          width: { lg: '45%', desktop: '100%' },
        }}
      />
      <Box
        sx={{
          m: theme => ({
            xs: theme.spacing(10, 3),
            tablet: theme.spacing(8, 7.25),
            lg: theme.spacing(5),
            desktop: theme.spacing(19.25, 12),
          }),
          textAlign: 'center',
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'start',
          },
        }}>
        <Typography
          variant='h1'
          component='h2'
          sx={{
            color: theme => theme.palette.primary.main,
            mb: theme => theme.spacing(3),
          }}>
          {title}
        </Typography>
        <Typography
          variant={matchesTabletScreen ? 'body1' : 'body2'}
          sx={{
            color: theme => theme.palette.common.darkGray,
          }}>
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {/* Adds a line breaks unless it's the last paragraph */}
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
