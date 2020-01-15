import React from 'react'
import PropTypes from 'prop-types'

import style from './projects.style'

const projects = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Nullam blandit cursus erat auctor hendrerit. Sed volutpat risus risus, a dapibus dolor finibus eu.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Nullam blandit cursus erat auctor hendrerit. Sed volutpat risus risus, a dapibus dolor finibus eu.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Nullam blandit cursus erat auctor hendrerit. Sed volutpat risus risus, a dapibus dolor finibus eu.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Nullam blandit cursus erat auctor hendrerit. Sed volutpat risus risus, a dapibus dolor finibus eu.',
  },
]

const Projects = ({ className }) => (
  <div className={`${style.Projects} ${className}`}>
    {projects.map(project => (
      <div className={style.project}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
)

Projects.defaultProps = {
  className: '',
}

Projects.propTypes = {
  className: PropTypes.string,
}

export default Projects
