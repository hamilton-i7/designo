import React from 'react'
import Box from '@mui/material/Box'
import ImageButton from './button/imageButton'
import { useMediumScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

const Projects = ({ projects }) => {
  const theme = useTheme()
  const matchesMediumScreen = useMediumScreenMatcher(theme)

  return (
    <Box
      component='article'
      sx={{
        display: 'grid',
        gap: theme => theme.spacing(3),
        gridTemplateColumns: 'repeat(12, 1fr)',
        minHeight: { md: '60rem' },
        py: theme => theme.spacing(15),
        px: theme => ({ xs: theme.spacing(3), sm: theme.spacing(5), md: '4%' }),
      }}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          gridRow={{
            // Create a large grid item for every third project
            xs: 'span 12',
            sm: index % 3 === 0 && matchesMediumScreen ? 'span 12' : 'span 6',
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
        gridColumn: { xs: 'span 12', md: 'span 6' },
        gridRow,
        height: { sm: '20rem', md: 'auto' },
      }}
    />
  )
}
