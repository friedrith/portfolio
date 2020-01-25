import React from 'react'
import PropTypes from 'prop-types'
import styledClassNames from '~utils/styledClassNames'
import style from './section.style'

const classNames = styledClassNames(style)

// https://fr.reactjs.org/docs/forwarding-refs.html

const Section = React.forwardRef(
  ({ className, center, three, icon, title, children }, ref) => (
    <div className={`${style.Section} ${className}`} ref={ref}>
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
