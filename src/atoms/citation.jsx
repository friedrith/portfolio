import React from 'react'
import PropTypes from 'prop-types'

import style from './citation.style'

const Citation = ({ text, author, className }) => (
  <div className={`${style.Citation} ${className}`}>
    <q lang="en" className={style.text}>
      {text}
    </q>
    <div className={style.author}>{author}</div>
  </div>
)

Citation.defaultProps = {
  text: '',
  author: '',
  className: '',
}

Citation.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  className: PropTypes.string,
}

export default Citation
