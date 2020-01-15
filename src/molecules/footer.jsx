import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './footer.style'

const Footer = ({ siteTitle }) => (
  <footer className={style.Footer}>
    <div className={style.top}>
      <div className={style.left}>
        <div className={style.tags}>
          #web #ux #frontend <br />
          #chatbot #designthinking
          <br /> #react #vr #mvp #startup
        </div>
      </div>
      <div className={style.right}>
        <div>Thibault FRIEDRICH</div>
        <div>
          11 rue de Lourmel
          <br />
          75015 Paris
        </div>
      </div>
    </div>
    © {new Date().getFullYear()}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
