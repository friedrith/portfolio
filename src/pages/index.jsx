import React, { useState } from 'react'

import { Spring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'
import Reveal from 'react-reveal/Reveal'

import StatCard from '~atoms/stat-card'
import Section from '~organisms/section'
import Footer from '~molecules/footer'
import LottieIcon from '~atoms/lottie-icon'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import MouseIndicator from '~atoms/mouse-indicator'
import Ribbon from '~atoms/ribbon'

import multimediaCode2 from '~assets/multimedia-code-2-outline-edited.json'
import projectManagement from '~assets/project-management-outline-edited.json'
import engageUsers from '~assets/engage-users-outline-edited.json'
import avatarManApproved from '~assets/avatar-man-approved-outline-edited.json'
import omniChannel from '~assets/omnichannel-outline-edited.json'
import chatMessageHeart from '~assets/chat-message-heart-outline-edited.json'
import glassesSearching from '~assets/glasses-searching-outline-edited.json'
import todoList from '~assets/to-do-list-outline-edited.json'
import johann from '~assets/johann.png'

const Method = ({ title, children, ...props }) => (
  <div className="flex flex-col justify-center items-center" {...props}>
    <div className="w-20 h-20 md:w-24 md:h-24">{children}</div>
    <div className="text-xl md:text-2xl text-center text-blue-500 pt-2 font-light">
      {title}
    </div>
  </div>
)

const Skill = ({ title, description }) => (
  <li>
    <span className="text-2xl">{title}</span>
    {description ? <span className="text-base"> ({description})</span> : ''}
  </li>
)

const IndexPage = () => {
  const [isActive1, setActive1] = useState(true)
  const [isActive2, setActive2] = useState(true)
  const [isActive3, setActive3] = useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="relative">
        <div className="bg-montreal bg-cover bg-center opacity-20 absolute inset-0 bg-no-repeat" />
        <section className="min-h-screen flex flex-col relative">
          {/* <Ribbon /> */}
          <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-32">
            <Reveal effect="fadeInLeft" mountOnEnter>
              <h1 className="text-white-500 text-5xl md:text-8xl tracking-wide font-light">
                Thibault FRIEDRICH
              </h1>
            </Reveal>
            <Reveal effect="fadeInLeft" mountOnEnter delay="200">
              <h2 className="text-purple-500 font-normal text-3xl tracking-wide md:pl-4 pt-5">
                Frontend Developer / Ux Designer
              </h2>
            </Reveal>
          </div>
          <div className="p-5 absolute bottom-0 inset-x-0 flex justify-center">
            <MouseIndicator />
          </div>
        </section>
        <section className="pt-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg m-auto justify-center">
            <VisibilitySensor active={isActive1} onChange={e => setActive1(!e)}>
              {({ isVisible }) => (
                <StatCard
                  number={12}
                  isVisible={isVisible}
                  description="years of coding"
                />
              )}
            </VisibilitySensor>
            <VisibilitySensor active={isActive2} onChange={e => setActive2(!e)}>
              {({ isVisible }) => (
                <StatCard
                  number={242}
                  suffix="k"
                  isVisible={isVisible}
                  description="changes for my last customer"
                />
              )}
            </VisibilitySensor>
            <VisibilitySensor active={isActive3} onChange={e => setActive3(!e)}>
              {({ isVisible }) => (
                <StatCard
                  number={266}
                  isVisible={isVisible}
                  description="stars for my best github project"
                />
              )}
            </VisibilitySensor>
          </div>
        </section>
      </div>

      <Section title="My Key Methods" id="stats" className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg m-auto justify-center">
          <Reveal effect="fadeInUp">
            <Method title="Code craftsmanship">
              <LottieIcon icon={multimediaCode2} />
            </Method>
          </Reveal>
          <Reveal effect="fadeInUp" duration="1400">
            <Method title="Agile methods">
              <LottieIcon icon={projectManagement} />
            </Method>
          </Reveal>
          <Reveal effect="fadeInUp" duration="1800">
            <Method title="User-Centered design">
              <LottieIcon icon={engageUsers} />
            </Method>
          </Reveal>
        </div>
      </Section>
      <section className="flex items-stretch flex-col lg:flex-row">
        <div className="bg-purple-500 p-8 flex-1 flex flex-col ">
          <h2 className="text-3xl pb-8 text-white-500 lg:text-right font-light">
            Frontend Developer
          </h2>
          <ul className="text-blue-500 text-xl flex-1 font-light list-square list-inside">
            <Skill
              title="JavaScript"
              description="React/Gatsby, node.js, WebGL"
            />
            <Skill title="CSS" description="Sass, Less, Bootstrap, Tailwind" />
            <Skill title="Php" description="Symfony 3+" />
            <Skill title="C#" description="Unity/VR" />
            <Skill title="Python" description="OpenCV" />
            <Skill title="C++" description="Qt" />
            <Skill title="Tests" description="jest, enzyme, QTest, selenium" />
            <Skill
              title="CI"
              description="Travis, Jenkins, gitlab runners, gitlab actions"
            />
            <Skill title="OS" description="Windows, MacOS, Linux" />
          </ul>
          <div className="text-white-500 pt-6">
            <div className="text-3xl">Dev Tools</div>
            <div>VS Code, Postman, Git, Github, Jira, npm, ITerm, Notion</div>
          </div>
        </div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          className="bg-purple-500 h-16 lg:h-auto lg:w-16"
        >
          <polygon points="100,0 0,100 100,100" style={{ fill: '#720045' }} />
        </svg>
        <div className="bg-purple-700 p-8 flex-1 flex flex-col">
          <h2 className="text-3xl pb-8 text-white-500 text-left font-light">
            Ux Designer
          </h2>
          <ul className="text-blue-500 text-xl flex-1 font-light list-square list-inside">
            <Skill title="User interviews" />
            <Skill title="Interface testing" />
            <Skill title="Persona" />
            <Skill title="Userflows" />
            <Skill title="Brainstorming" description="6-to-1" />
            <Skill title="Mockups" description="Wireframes, high-fidelity" />
            <Skill title="User journey map" />
            <Skill title="User story map" />
          </ul>
          <div className="text-white-500 pt-6">
            <div className="text-3xl">Design Tools</div>
            <div>
              Adobe XD, Balsamiq, Miro, Procreate, Notion, One Note, Google
              sheet
            </div>
          </div>
        </div>
      </section>
      <Section title="My Soft Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-12 max-w-screen-lg m-auto justify-center">
          <Reveal effect="fadeInUp">
            <Method title="Polyvalent">
              <LottieIcon icon={omniChannel} />
            </Method>
          </Reveal>

          <Reveal effect="fadeInUp" duration="1100">
            <Method title="Empathic">
              <LottieIcon icon={chatMessageHeart} />
            </Method>
          </Reveal>

          <Reveal effect="fadeInUp" duration="1200">
            <Method title="Efficient">
              <LottieIcon icon={todoList} />
            </Method>
          </Reveal>

          <Reveal effect="fadeInUp" duration="1300">
            <Method title="Curious">
              <LottieIcon icon={glassesSearching} />
            </Method>
          </Reveal>

          <Reveal effect="fadeInUp" duration="1400">
            <Method title="Reliable">
              <LottieIcon icon={avatarManApproved} />
            </Method>
          </Reveal>
        </div>
      </Section>
      <Section title="Testimonial" className="py-24 relative">
        <div className="flex flex-col items-center lg:flex-row lg:items-end ">
          <Reveal effect="fadeInRight" duration="1300">
            <img src={johann} alt="Johann Foucher" className="max-h-64" />
          </Reveal>
          <Reveal effect="fadeInLeft" duration="1300">
            <div className="p-3 text-center lg:text-left">
              <div className="text-purple-500 text-xl md:text-2xl">
                Johann Foucher
              </div>
              <div className="text-purple-500 text-xl md:text-xl italic">
                Founder & CEO at Pollen Metrology
              </div>
              <div className="pt-3 text-blue-500 italic lg:-mb-8">
                <span className="text-5xl align-bottom">“</span>I am considering
                Thibault as a reference in his field of expertise. He is a deep
                passionate and whatever difficulty he has to face he will always
                succeed to break the wall of difficulty. He is able to work
                either on the technical program and on the project management
                that can involve a team of experts and customers.
                <span className="text-5xl align-top">“</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section title="About Me" className="p-6 min-h-half relative">
        <div className="bg-world bg-contain bg-center opacity-20 absolute inset-0 bg-no-repeat" />
        <p className="text-white-500 font-light relative">
          I am a french <strong>Frontend Developer and Ux Designer</strong>{' '}
          living in Montreal and working in <strong>remote</strong> as a
          freelance.
        </p>
        <p className="text-white-500 font-light pt-6 relative">
          My various experiences as <strong>startup CTO</strong>,{' '}
          <strong>frontend team leader</strong> and multiple time Startup
          weekend organizer, gave me a <strong>deep</strong> knowledge of the
          frontend stack and understanding of the{' '}
          <strong>user experience</strong>. I am also able to work in both
          french and english.
        </p>
      </Section>
      <Section title="Contact Me">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="mailto:thibault.friedrich@gmail.com"
            className="text-center text-blue-500 hover:text-blue-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="las la-envelope text-5xl " />
            <div className="text-xl">Email</div>
          </a>
          <a
            href="https://www.linkedin.com/in/thibault-friedrich"
            className="text-center text-blue-500 hover:text-blue-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-linkedin-in text-5xl " />
            <div className="text-xl">Linkedin</div>
          </a>
          <a
            href="https://github.com/friedrith"
            className="text-center text-blue-500 hover:text-blue-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-github text-5xl " />
            <div className="text-xl">Github</div>
          </a>
          <a
            href="https://thibault-friedrich.medium.com/"
            className="text-center text-blue-500 hover:text-blue-300 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-medium text-5xl " />
            <div className="text-xl">Medium</div>
          </a>
        </div>
      </Section>
      <Footer />
    </Layout>
  )
}

export default IndexPage
