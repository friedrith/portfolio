import React from 'react'

import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'

import style from './design.style'

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <Section title="Design user experience" center className={style.ux}>
      <div className={style.multipleParagraphes}>
        <p>
          A user experience is about how your customer feels and what he does
          while using your product. The goal is to make this experience as{' '}
          <strong>enjoyable</strong> as possible so that he continues to use it.
        </p>
      </div>
    </Section>
    <Section title="Ux designer" className={style.uxDesigner} center>
      <div className={style.background} />
      <div className={style.left}>
        Like development or marketing, <strong>designing</strong> a user
        experience is a <strong>specific job</strong>:
        <ul className={style.list}>
          <li>collecting and merging user needs</li>
          <li>prioritizing the features to implement</li>
          <li>fast prototyping</li>
          <li>testing the prototype with users</li>
          <li>listening the feedbacks to improve your product</li>
        </ul>
      </div>
    </Section>
    <Section title="Adapted to the team">
      <div className={style.right}>Depending on</div>
    </Section>
  </Layout>
)

export default Design
