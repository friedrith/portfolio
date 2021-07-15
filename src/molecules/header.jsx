import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './header.style'

const Header = ({ className }) => (
  <header className={`${style.Header} ${className}`}>
    <div className={style.layout}>
      <h1 className={style.name}>
        <Link className={style.home} to="/">
          Thibault
          <br />
          Friedrich
        </Link>
      </h1>
      <div className={style.socialList}>
        <Link
          className={style.social}
          to="/freelance"
          activeClassName={style.active}
          partiallyActive
        >
          Freelance
        </Link>
        <Link
          className={style.social}
          to="/contact"
          activeClassName={style.active}
          partiallyActive
        >
          Contact
        </Link>
        <a
          className={style.social}
          href="https://medium.com/@Daneel_Olivaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: '',
}

export default Header
