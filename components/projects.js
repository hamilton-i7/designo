import React from 'react'
import Box from '@mui/material/Box'
import ImageButton from './button/imageButton'
import { MAX_WIDTH, useLargeScreenMatcher } from '../lib/responsive'
import { useTheme } from '@mui/material'

const Projects = ({ projects, complexLayout = false, sx }) => {
  const theme = useTheme()
  const matchesLargeScreen = useLargeScreenMatcher(theme)

  return (
    <Box
      sx={{
        display: 'grid',
        gap: theme => theme.spacing(3),
        gridTemplateColumns: 'repeat(2, 1fr)',
        maxWidth: MAX_WIDTH,
        ...sx,
      }}>
      {projects.map((project, index) => {
        const isLargeItem = index === 0 && matchesLargeScreen

        return (
          <ProjectItem
            key={index}
            project={project}
            sx={
              complexLayout && {
                // Create a large grid item for every third project
                gridRow: {
                  xs: 'span 2',
                  sm: isLargeItem ? 'span 2' : 'span 1',
                },
              }
            }
          />
        )
      })}
    </Box>
  )
}

export default Projects

const ProjectItem = ({ project, sx }) => {
  return (
    <ImageButton
      project={project}
      sx={{
        gridColumn: { xs: 'span 2', lg: 'span 1' },
        ...sx,
      }}
    />
  )
}
