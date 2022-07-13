import React from 'react'
import Box from '@mui/material/Box'
import ImageButton from './button/imageButton'
import { MAX_WIDTH, useLargeScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

const Projects = ({ projects }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box
      component='article'
      sx={{
        display: 'grid',
        gap: theme => theme.spacing(3),
        gridTemplateColumns: 'repeat(12, 1fr)',
        height: { md: '60rem', lg: '64rem' },
        my: theme => ({ xs: theme.spacing(15), lg: theme.spacing(20) }),
        mx: theme => ({
          xs: theme.spacing(3),
          sm: theme.spacing(5),
          lg: theme.spacing(20.625),
          xl: 'auto',
        }),
        maxWidth: MAX_WIDTH,
      }}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          gridRow={{
            // Create a large grid item for every third project
            xs: 'span 12',
            sm: index % 3 === 0 && matchesLargeScreen ? 'span 12' : 'span 6',
          }}
        />
      ))}
    </Box>
  )
}

export default Projects

const ProjectItem = ({ project, gridRow }) => {
  return (
    <ImageButton
      project={project}
      sx={{
        gridColumn: { xs: 'span 12', lg: 'span 6' },
        gridRow,
        height: { sm: '20rem', md: 'auto' },
      }}
    />
  )
}
