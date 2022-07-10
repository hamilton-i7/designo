import React from 'react'
import Box from '@mui/material/Box'
import ImageButton from './button/imageButton'

const Projects = ({ projects }) => {
  return (
    <Box
      component='section'
      display='grid'
      gridTemplateColumns='repeat(12, 1fr)'
      gap={2}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          gridRow={{
            // Create a large grid item for every third project
            xs: index % 3 === 0 ? '1 / 3' : 1,
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
        gridColumn: { xs: '1 / 12' },
        gridRow,
      }}
    />
  )
}
