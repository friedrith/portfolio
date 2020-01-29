import React from 'react'
import PropTypes from 'prop-types'

import style from './geometric-shapes.style'

const GeometricShapes = ({ className }) => {
  return (
    <div>
      <svg
        viewBox="0 0 210 210"
        className={`${style.GeometricShapes} ${style.square} ${className}`}
      >
        <polygon points="10,10 200,10 200,200, 10,200" />
      </svg>

      <svg
        viewBox="0 0 210 210"
        className={`${style.GeometricShapes} ${style.triangle} ${className}`}
      >
        <polygon points="100,10 200,200, 10,200" />
      </svg>

      <svg
        viewBox="0 0 210 210"
        className={`${style.GeometricShapes} ${style.circle} ${className}`}
      >
        <circle r="97" cx="110" cy="110" />
      </svg>
    </div>
  )
}

GeometricShapes.defaultProps = {
  className: '',
}

GeometricShapes.propTypes = {
  className: PropTypes.string,
}

export default GeometricShapes
