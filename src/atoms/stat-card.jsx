import React from 'react'
import PropTypes from 'prop-types'

const StatCard = ({ title, unit, description }) => (
  <div className="p-8 rounded">
    <div className="text-6xl text-white-500 font-normal">{title}</div>
    <div className="text-purple-500 text-xl pt-2">
      {unit} {description}
    </div>
  </div>
)

StatCard.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.string,
}

StatCard.defaultProps = {
  title: '',
  unit: '',
  description: '',
}

export default StatCard
