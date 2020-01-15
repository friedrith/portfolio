import React from 'react'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'
import Social from '~atoms/social'
import githubIcon from '~assets/github'
import linkedInIcon from '~assets/linkedin'
import emailIcon from '~assets/email'

import style from './contact.style'

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section className={style.Contact} center title="Contact me">
      <p>Some needs ? Contact me using one of these media:</p>
      <div className={style.socials}>
        <Social
          icon={githubIcon}
          className={style.social}
          url="https://github.com/friedrith/"
        />

        <Social
          icon={linkedInIcon}
          className={style.social}
          url="https://www.linkedin.com/in/thibault-friedrich/"
        />

        <Social
          icon={emailIcon}
          className={style.social}
          url="mailto:thibault.friedrich@gmail.com"
        />
      </div>
      <div className={style.address}>
        Thibault FRIEDRICH
        <br /> 11 rue de Lourmel
        <br /> 75015 Paris
      </div>
    </Section>
  </Layout>
)

export default IndexPage
