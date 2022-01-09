import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({ className, href }) => (
  <a
    className={`isometric-card ${className}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <div className="overlay bg-black-500" />
  </a>
)

ProjectCard.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}

ProjectCard.defaultProps = {
  className: '',
}

export default ProjectCard
