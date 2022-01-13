import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
  className,
  href,
  onMouseEnter,
  onMouseLeave,
  hovered,
}) => (
  <a
    className={`isometric-card ${className} ${hovered ? 'active' : ''}`}
    href={href}
    target="_blank"
    rel="noreferrer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="overlay bg-black-500" />
  </a>
)

ProjectCard.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  hovered: PropTypes.bool,
}

ProjectCard.defaultProps = {
  className: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  hovered: false,
}

export default ProjectCard
