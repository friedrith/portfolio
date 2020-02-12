import React from 'react'
import Particles from 'react-particles-js'

import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'
import Social from '~atoms/social'
import githubIcon from '~assets/github'
import linkedInIcon from '~assets/linkedin'
import emailIcon from '~assets/email'

import style from './contact.style'

import particles from './particles' // https://codepen.io/pen/?&editable=true

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section className={style.Contact} center title="Contact me">
      <Particles
        className={style.background}
        width="100%"
        height="100%"
        params={particles}
      />
      <div className={style.center}>
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
      </div>
    </Section>
  </Layout>
)

export default IndexPage
