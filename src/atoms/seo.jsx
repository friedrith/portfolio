/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * See: https://www.gatsbyjs.com/docs/add-seo-component/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useLocation } from '@reach/router'

import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            titleTemplate
            defaultDescription
            author
            siteUrl
            defaultImage
            keywords
          }
        }
      }
    `
  )

  const { pathname } = useLocation()
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    keywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'keywords',
          content: seo.keywords,
        },
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          name: 'twitter:url',
          content: seo.url,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:image',
          content: seo.image,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
  title: '',
  image: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
