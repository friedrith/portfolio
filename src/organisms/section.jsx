import React from 'react'
import PropTypes from 'prop-types'

// https://fr.reactjs.org/docs/forwarding-refs.html

const Section = ({ title, children, className }) => (
  <section
    className={`min-h-half flex flex-col justify-center items-center p-4 ${className}`}
  >
    <div className="max-w-screen-lg m-auto justify-center">
      {title ? (
        <h2 className="text-purple-500 text-5xl text-center pb-12 pt-6 font-normal">
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  </section>
)

Section.defaultProps = {
  children: [],
  title: '',
  className: '',
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.string,
  className: PropTypes.string,
}

export default Section
