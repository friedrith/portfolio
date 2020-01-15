import React from 'react'
import PropTypes from 'prop-types'
import buildClassNames from 'classnames'

import style from './section.style'

const classNames = (...args) =>
  buildClassNames(
    args.map(arg => {
      if (typeof arg !== 'object') {
        return arg
      }
      return Object.keys(arg).reduce(
        (acc, key) => ({
          ...acc,
          [style[key]]: arg[key],
        }),
        {}
      )
    })
  )

const Section = ({ className, center, three, icon, title, children }) => (
  <div className={`${style.Section} ${className}`}>
    <div
      className={`${style.container} ${classNames({
        full: !three && !center,
        center,
        three,
        withTitle: title,
      })}`}
    >
      {icon ? <img src={icon} alt={title} className={style.icon} /> : null}
      {title ? <h2 className={style.title}>{title}</h2> : null}
      {children}
    </div>
  </div>
)

Section.defaultProps = {
  className: '',
  children: [],
  center: false,
  three: false,
  title: '',
  icon: null,
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  center: PropTypes.bool,
  three: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
}

export default Section
