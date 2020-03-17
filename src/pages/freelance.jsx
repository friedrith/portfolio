import React from 'react'
import { Link } from 'gatsby'

import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import Section from '~organisms/section'
import Footer from '~molecules/footer'
import GeometricShapes from '~atoms/geometric-shapes'

import canada from '~assets/canada.png'

import style from './freelance.style'

const Freelance = () => (
  <Layout>
    <SEO title="Freelance" />
    <Section className={style.Welcome} center>
      <GeometricShapes className={style.shapes} />I build highly{' '}
      <strong>customized</strong> user experiences to make your product
      efficient, <strong>user-friendly</strong> and <strong>unique</strong>.
      <div className={style.callToActions}>
        <Link className={style.button} to="/contact">
          Get a user-friendly product
        </Link>
      </div>
    </Section>
    <Section className={style.missions}>
      <div className={style.missionList}>
        <div className={`${style.mission} ${style.mission1}`}>
          <div className={style.content}>
            <h3 className={style.name}>Design</h3>
            <div className={style.description}>
              You need some help to design a product usable by your customers ?
              <div>
                <Link
                  className={`${style.button} ${style.more}`}
                  to="/freelance/design"
                >
                  More about design
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.mission} ${style.mission2}`}>
          <div className={style.content}>
            <h3 className={style.name}>Development</h3>
            <div className={style.description}>
              You need a frontend developer to speed up your release ?
              <div>
                <Link
                  className={`${style.button} ${style.more}`}
                  to="/freelance/frontend"
                >
                  More about frontend
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.mission} ${style.mission3}`}>
          <div className={style.content}>
            <h3 className={style.name}>All-in-One</h3>
            <div className={style.description}>
              You have an idea and you want a user-friendly and finished product
              ?
              <div>
                <Link className={`${style.button} ${style.more}`} to="/contact">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* <Section title="Make the difference" center>
      <p>
        I build highly customized user experiences to make your product
        effective, welcoming and unique.
      </p>
    </Section>
    <Section title="What my clients say" center>
      <q>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
        eget nisi in ornare. Aenean quis nulla eget mauris malesuada molestie id
        eget massa. Nam porta tortor nisi, eget ornare est tempus nec.
      </q>
      <div className={style.author}>
        <div className={style.name}>
          Lorem ipsum
          <br /> dolor sit amet
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="boss"
          className={style.avatar}
        />
      </div>
    </Section> */}
    {/* <Section title="My projects">
      <Projects />
</Section> */}
    <Section title="My key strenghs" three>
      <ul className={style.list}>
        <li className={style.item}>
          <h3>Polyvalence</h3>
          <p>
            I am very curious and always try to learning new technologies. So I
            can now work with a lot of technologies and methods.
          </p>
        </li>
        <li className={style.item}>
          <h3>Empathy</h3>
          <p>
            I am able to empathize customer feelings. It makes me very efficient
            to improve user experiences or design new ones.
          </p>
        </li>
        <li className={style.item}>
          <h3>Performance</h3>
          <p>
            I never settle with current state and always do my best to
            anticipate my client&apos;s needs.
          </p>
        </li>
      </ul>
    </Section>
    <Section title="About Me" center icon={canada} className={style.about}>
      <p>
        After more than 5 years of programming as{' '}
        <strong>Frontend Engineer</strong>, <strong>Ux Designer</strong> or{' '}
        <strong>Product Owner</strong>, I am now fullstack freelance in{' '}
        <strong>Montreal</strong> working in remote.
      </p>
    </Section>
    <Section title="Why me?" center>
      <p>
        With the various digital solutions available in 2020,{' '}
        <strong>a unique and smooth</strong> user experience is one of{' '}
        <strong>the key benefit</strong> to overtake competition. I am here to
        understand your needs, design then implement a robust user experience
        for your customers.
      </p>
      <div className={style.callToActions}>
        <Link className={style.button} to="/contact">
          Overtake the competition
        </Link>
      </div>
    </Section>
    {/* <Section title="My strong values" three>
      <ul className={style.list}>
        <li className={style.item}>
          <h3>Trust</h3>
          <p>
            To focus on features implementation over too much contractualization
            and planning, I based my work on trust with my customers. Since
            trust needs proof and time, my first work days may be SATISFIED OR
            REFUNDED.
          </p>
        </li>
        <li className={style.item}>
          <h3>Ut ultricies sem et </h3>
          <p>
            Vestibulum quis gravida orci. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </li>
        <li className={style.item}>
          <h3>Ut ultricies sem et </h3>
          <p>
            Vestibulum quis gravida orci. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </li>
      </ul>
    </Section>
    <Section title="My key methods">
      <Projects />
    </Section> */}
    {/* <Section title="Mission" center>
      <p>
        After more than ten years of programming, I am now freelance living in
        Montreal and working part time and in full remote for my clients.
      </p>
    </Section> */}
    <Footer />
  </Layout>
)

export default Freelance
