import React from 'react'
import useDots from '~utils/behaviors/useDots'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'
import Citation from '~atoms/citation'

import style from './index.style'

const IndexPage = () => {
  const ref = useDots({
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xf7f7f7,
    backgroundColor: 0x0,
    size: 3.5,
    spacing: 51.0,
    showLines: false,
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Section className={style.Welcome} center ref={ref}>
        <Citation
          className={style.citation}
          text="The best way to predict the future is to create it"
          author="Peter Drucker"
        />
      </Section>
    </Layout>
  )
}

export default IndexPage
