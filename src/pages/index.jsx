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
import Laptop from '~atoms/Laptop'

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
      <section className="min-h-screen flex flex-col relative">
        <div className="absolute h-full w-full z-40">
          <Laptop />
        </div>

        {/* <Ribbon /> */}
        <div className="flex-1 flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-32 relative z-30">
          <div className="md:flex-1">
            <Reveal effect="fadeInLeft" mountOnEnter>
              <h1 className="text-white-500 text-center md:text-left text-3xl md:text-5xl 2xl:text-8xl tracking-wide font-light">
                Thibault FRIEDRICH
              </h1>
            </Reveal>
            <Reveal effect="fadeInLeft" mountOnEnter delay={200}>
              <h2 className="text-purple-500 text-center md:text-left font-normal text-2xl 2xl:text-3xl tracking-wide md:pl-4 pt-5">
                Frontend Developer / Ux Designer
              </h2>
            </Reveal>
          </div>
          <div className="md:flex-1 flex items-center justify-center py-10 h-60">
            {/* <div>
                <div className="font-mono text-2xl md:text-3xl xl:text-5xl 2xl:text-7xl text-blue-500 text-center	">
                  &lt;Born
                  <br />
                  to
                  <br /> Code/&gt;
                </div>
              </div> */}
          </div>
        </div>
        <div className="p-5 absolute bottom-0 inset-x-0 flex justify-center">
          <MouseIndicator />
        </div>
      </section>
      <section className="min-h-half flex flex-col justify-center items-center px-6 md:px-24 pt-6 pb-6 relative">
        <div className="bg-montreal bg-cover bg-center opacity-20 absolute inset-0 bg-no-repeat" />

        <div className="flex flex-col md:flex-row max-w-screen-lg m-auto justify-center items-center">
          <div className="flex-1 text-white-500 font-light relative">
            <p className="font-base">
              I am a french{' '}
              <strong className="font-base">
                Frontend Developer and Ux Designer
              </strong>{' '}
              always curious about technologies, programming languages and
              design and it makes me very polyvalent. I am also considerated as
              passionate, full of energy and reliable.
            </p>
            <p className="pt-6 font-base">
              My various experiences as{' '}
              <strong className="font-base">freelance</strong>,{' '}
              <strong className="font-base">startup CTO</strong>, and{' '}
              <strong className="font-base">frontend team leader</strong>, gave
              me a <strong className="font-base">deep</strong> knowledge of the
              frontend stack and understanding of the{' '}
              <strong className="font-base">user experience</strong>.
            </p>
            <p className="pt-6 font-base">
              I am living in Montreal and working in{' '}
              <strong className="font-base">remote</strong> as a freelance and I
              adapt myself to any timezone. I am also able to work in both
              french and english.
            </p>
          </div>
          <div className="flex-0 pt-10 md:pt-0 md:pl-14">
            <VisibilitySensor active={isActive1} onChange={e => setActive1(!e)}>
              {({ isVisible }) => (
                <StatCard number={15} isVisible={isVisible}>
                  years of coding
                </StatCard>
              )}
            </VisibilitySensor>
            <VisibilitySensor active={isActive2} onChange={e => setActive2(!e)}>
              {({ isVisible }) => (
                <StatCard number={242} suffix="k" isVisible={isVisible}>
                  changes for my
                  <br /> last customer
                </StatCard>
              )}
            </VisibilitySensor>
            <VisibilitySensor active={isActive3} onChange={e => setActive3(!e)}>
              {({ isVisible }) => (
                <StatCard number={300} isVisible={isVisible}>
                  stars for my best
                  <br />
                  <a
                    className="hover:underline"
                    href="https://github.com/friedrith/node-wifi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github project
                  </a>
                  *
                </StatCard>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </section>
      <section className="min-h-half max-w-screen-2xl m-auto px-4 md:px-12 flex flex-col justify-center ">
        <div className="grid grid-cols-3 xl:grid-cols-7 gap-6 md:gap-12 justify-center ">
          <div className="p-8 rounded-md col-span-3 xl:col-span-2 shadow-dark my-10">
            <h2 className="text-center pb-4 text-2xl text-white-500">
              Fullstack
            </h2>
            <ul className="leading-10 text-purple-600">
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Php (Symfony)
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Python
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                C++, C (Qt)
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                C# (Unity/VR)
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Linux (Debian, ...)
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Java (SWT)
              </li>
            </ul>
          </div>
          <div className=" p-8 rounded-md col-span-3 shadow-dark ">
            <h2 className="text-center pb-4 text-2xl text-white-500">
              Frontend
            </h2>
            <ul className="leading-10 text-blue-500">
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Frameworks: React, Vue
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Style: CSS, SASS, Tailwind
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Animations: React-spring, animate.js
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Draw: WebGL, Canvas, SVG
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Mobile: React Native, Ionic
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Apps: Gatsby, PWA
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Tests: Jest, Enzyme, Selenium
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                CI: Jenkins, Github Actions
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-md col-span-3 xl:col-span-2 shadow-dark my-10">
            <h2 className="text-center pb-4 text-2xl text-white-500">Design</h2>
            <ul className="leading-10 text-purple-600">
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Mockups
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                Userflows
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                User interviews
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                User testing
              </li>
              <li>
                <i className="lar la-check-circle font-bold text-xl mr-1" />
                User story map
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Section title="My Key Methods" id="stats">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg m-auto justify-center">
          <Reveal effect="fadeInUp">
            <Method title="Code craftsmanship">
              <LottieIcon icon={multimediaCode2} />
            </Method>
          </Reveal>
          <Reveal effect="fadeInUp" duration={1400}>
            <Method title="Agile methods">
              <LottieIcon icon={projectManagement} />
            </Method>
          </Reveal>
          <Reveal effect="fadeInUp" duration={1800}>
            <Method title="User-Centered design">
              <LottieIcon icon={engageUsers} />
            </Method>
          </Reveal>
        </div>
      </Section>
      {/* <section className="flex items-stretch flex-col lg:flex-row">
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
      </section> */}
      {/* <Section title="My Soft Skills">
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
      </Section> */}
      <Section title="Testimonial" className="py-24 relative background">
        <div className="flex flex-col items-center lg:flex-row lg:items-end ">
          <Reveal effect="fadeInRight" duration={1300}>
            <img
              src={johann}
              alt="Johann Foucher"
              className="max-h-44 md:max-h-64"
            />
          </Reveal>
          <Reveal effect="fadeInLeft" duration={1300}>
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
      {/* <Section title="More About Me" className="p-6 min-h-half relative">
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
      </Section> */}
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
