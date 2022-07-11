import React from 'react'
import Box from '@mui/material/Box'
import ImageButton from './button/imageButton'

const Projects = ({ projects }) => {
  return (
    <Box
      component='article'
      sx={{
        display: 'grid',
        gap: '2.4rem',
        gridTemplateColumns: 'repeat(12, 1fr)',
        p: '12rem 2.4rem',
      }}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          gridRow={{
            // Create a large grid item for every third project
            xs: 'span 12',
            sm: index % 3 === 0 ? 'span 12' : 'span 6',
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
        gridColumn: { xs: 'span 12', sm: 'span 6' },
        gridRow,
      }}
    />
  )
}
