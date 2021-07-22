import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'

const LottieIcon = ({ icon, className, ...props }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...props,
  }

  return <Lottie options={defaultOptions} className={className} />
}

LottieIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
}

LottieIcon.defaultProps = {
  className: '',
}

export default LottieIcon
