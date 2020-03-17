import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './header.style'

const Header = ({ siteTitle, className }) => (
  <header className={`${style.Header} ${className}`}>
    <div className={style.layout}>
      <h1 className={style.name}>
        <Link className={style.link} to="/">
          {siteTitle}
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
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  className: '',
  siteTitle: '',
}

export default Header
