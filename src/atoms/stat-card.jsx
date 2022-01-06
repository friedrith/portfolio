import React from 'react'
import PropTypes from 'prop-types'

import { useSpring, animated } from 'react-spring'

const StatCard = ({ number, isVisible, suffix, children }) => {
  const style = useSpring({ number: isVisible ? number : 0 })

  return (
    <div className="py-8 rounded text-center md:text-left">
      <animated.div className="text-4xl md:text-5xl text-white-500 font-normal">
        {style.number.to(x =>
          x < number || suffix ? `${x.toFixed(0)}${suffix}` : `${x}+`
        )}
      </animated.div>
      <div className="text-purple-500 text-lg pt-2">{children}</div>
    </div>
  )
}

StatCard.propTypes = {
  number: PropTypes.number,
  isVisible: PropTypes.bool,
  suffix: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

StatCard.defaultProps = {
  number: 0,
  isVisible: false,
  suffix: '',
  children: [],
}

export default StatCard
