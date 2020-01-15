import React from 'react'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'
import Citation from '~atoms/citation'

import style from './index.style'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section className={style.Welcome} center>
      <Citation
        className={style.citation}
        text="The best way to predict the future is to create it"
        author="Peter Drucker"
      />
    </Section>
  </Layout>
)

export default IndexPage
