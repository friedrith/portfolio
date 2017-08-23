import React from 'react'
import PropTypes from 'prop-types'

import style from './EyeCatcher.style'

const EyeCatcher = ({ className }) => (
  <div className={`${style.eyeCatcher} ${className}`}>
    <div className={style.bar} />
  </div>
)

EyeCatcher.propTypes = {
  className: PropTypes.string,
}

export default EyeCatcher
