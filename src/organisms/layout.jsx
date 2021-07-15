/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '~molecules/header'
import * as styles from './layout.style'

const Layout = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`${styles.Layout} ${className}`}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.defaultProps = {
  className: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
