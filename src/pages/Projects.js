import React from 'react'
import { projects } from '../portfolio'
import ProjectContainer from '../components/ProjectContainer/ProjectContainer'
import uniqid from 'uniqid'

const Projects = () => {
  
  if (!projects.length)
  return null;
  return (
    <section className='section projects'>
    <div className='grid gap-8 lg:grid-cols-3 max-w-[1200px]'>

      {projects.map((project) =>(
        <ProjectContainer key = {uniqid()} project = {project}/>
      ))}
      
    </div>
    </section>
  )
}

export default Projects
