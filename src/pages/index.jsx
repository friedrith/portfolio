import React from 'react'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'

import MultimediaCode2OutlineInline from '~assets/svg/multimedia-code-2-outline.inline.svg'
import ProjectManagement from '~assets/svg/project-management-outline.inline.svg'
import GoalTarget from '~assets/svg/goal-target-outline.inline.svg'
import EngageUsers from '~assets/svg/engage-users-outline.svg'
import OmniChannel from '~assets/svg/omnichannel-outline.svg'
import ChatMessageHeart from '~assets/svg/chat-message-heart-outline.svg'
import TodoList from '~assets/svg/to-do-list-outline.svg'
import MagnifierZoomSearch from '~assets/svg/magnifier-zoom-search-outline.svg'
import AvatarManApproved from '~assets/svg/avatar-man-approved-outline.svg'

import StatCard from '~atoms/stat-card'
import Section from '~organisms/section'
import Footer from '~molecules/footer'

const Method = ({ title, children }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-24 h-24">{children}</div>
    <div className="text-2xl text-center text-blue-500 pt-2 font-light">
      {title}
    </div>
  </div>
)

const SkillCard = ({ title, children }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-24 h-24">{children}</div>
    <div className="text-2xl text-center text-cyan-500 pt-2">{title}</div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="min-h-screen flex flex-col">
      {/* <header className="flex flex-none">
        <div className="flex-1 p-12 text-2xl text-black dark:text-white tracking-widest font-medium">
          Thibault
          <br />
          FRIEDRICH
        </div>
        <div className="flex-none p-8">Foo</div>
      </header> */}
      <div className="flex-1 flex flex-col justify-center items-start px-32">
        <h1 className="text-white-500 text-8xl tracking-wide font-light">
          Thibault FRIEDRICH
        </h1>
        <h2 className="text-purple-500 font-normal text-3xl tracking-wide pl-4 pt-5">
          Frontend Developer / Ux Designer
        </h2>
      </div>
    </section>
    <section className="">
      <div className="grid grid-cols-3 gap-12 max-w-screen-lg m-auto justify-center">
        <StatCard title="12+" unit="years" description="of coding" />
        <StatCard
          title="242k+"
          unit="changes"
          description="for my last customer"
        />
        <StatCard
          title="266"
          unit="stars"
          description="for my best github project"
        />
      </div>
    </section>
    <Section title="My Key Methods">
      <div className="grid grid-cols-4 gap-12 max-w-screen-lg m-auto justify-center">
        <Method title="Code craftmanship">
          <MultimediaCode2OutlineInline />
        </Method>
        <Method title="Agile methods">
          <ProjectManagement />
        </Method>
        <Method title="Lean product">
          <GoalTarget />
        </Method>
        <Method title="User-Centered design">
          <EngageUsers />
        </Method>
      </div>
    </Section>
    <section className="flex items-stretch flex-col lg:flex-row">
      <div className="bg-purple-500 p-8 flex-1 flex flex-col ">
        <h2 className="text-3xl pb-8 text-white-500 lg:text-right font-light">
          Frontend Developer
        </h2>
        <ul className="text-blue-300 text-xl flex-1 font-light">
          <li>Javascript (React/Gatsby, node.js)</li>
          <li>CSS (Sass, Less, Bootstrap, Tailwind)</li>
          <li>Php (Symfony 3+)</li>
          <li>C# (Unity)</li>
          <li>Python (OpenCV)</li>
          <li>C++ (Qt)</li>
          <li>Tests (jest, enzyme, QTest, selenium)</li>
          <li>CI (Travis, Jenkins, gitlab runners, gitlab actions)</li>
          <li>OS (Windows, MacOS, Linux)</li>
        </ul>
        <div className="text-blue-500 pt-6">
          <div className="text-3xl">Dev Tools</div>
          <div>Vs Code, Postman, Git, Github, Jira, npm, ITerm, Notion</div>
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
        <ul className="text-blue-300 text-xl flex-1 font-light">
          <li>User interviews</li>
          <li>Persona</li>
          <li>Userflows</li>
          <li>Mockup prototyping (Wireframes, high-fidelity)</li>
          <li>User journey map</li>
          <li>User story map</li>
        </ul>
        <div className="text-blue-500 pt-6">
          <div className="text-3xl">Design Tools</div>
          <div>
            Adobe XD, Balsamiq, Miro, Procreate, Notion, One Note, Google sheet
          </div>
        </div>
      </div>
    </section>
    <Section title="My Soft Skills">
      <div className="grid grid-cols-5 gap-12 max-w-screen-lg m-auto justify-center">
        <SkillCard title="Polyvalent">
          <OmniChannel />
        </SkillCard>
        <SkillCard title="Empathic">
          <ChatMessageHeart />
        </SkillCard>
        <SkillCard title="Efficient">
          <TodoList />
        </SkillCard>
        <SkillCard title="Curious">
          <MagnifierZoomSearch />
        </SkillCard>
        <SkillCard title="Reliable">
          <AvatarManApproved />
        </SkillCard>
      </div>
    </Section>
    <Section title="About me">
      <p className="text-white-500 font-light">
        I am a <strong>french</strong> frontend developer and ux designer living
        in Montreal and working in remote as a freelance. I am able to work in
        both french and english.
      </p>
      <p className="text-white-500 font-light pt-6">
        In the past I led a frontend team for <strong>2+ years</strong> with
        both freelance and employee status. I also worked as a volunteer to
        organize 2 Startup weekends in France and in particular in charge of
        sponsors. I studied computer science and human-computer interaction in
        the french Computer Science Engineer School <strong>ENSIMAG</strong>.
      </p>
    </Section>
    <Section title="Contact me">
      <div className="grid grid-cols-4 gap-4">
        <a
          href="mailto:thibault.friedrich@gmail.com"
          className="text-center text-purple-500 hover:text-purple-600 text-2xl"
        >
          <i className="las la-envelope text-5xl text-blue-500" />
          <div className="text-xl">Email</div>
        </a>
        <a
          href="https://www.linkedin.com/in/thibault-friedrich"
          className="text-center text-purple-500 hover:text-purple-600 text-2xl"
        >
          <i className="lab la-linkedin-in text-5xl text-blue-500" />
          <div className="text-xl">Linkedin</div>
        </a>
        <a
          href="https://github.com/friedrith"
          className="text-center text-purple-500 hover:text-purple-600 text-2xl"
        >
          <i className="lab la-github text-5xl text-blue-500" />
          <div className="text-xl">Github</div>
        </a>
        <a
          href="https://thibault-friedrich.medium.com/"
          className="text-center text-purple-500 hover:text-purple-600 text-2xl"
        >
          <i className="lab la-medium text-5xl text-blue-500" />
          <div className="text-xl">Medium</div>
        </a>
      </div>
    </Section>
    <Footer />
  </Layout>
)

export default IndexPage
