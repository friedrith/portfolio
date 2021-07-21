import React from 'react'
import Layout from '~organisms/layout'
import SEO from '~atoms/seo'

import style from './index.style'

import MultimediaCode2OutlineInline from '~assets/svg/multimedia-code-2-outline.inline.svg'
import ProjectManagement from '~assets/svg/project-management-outline.inline.svg'
import GoalTarget from '~assets/svg/goal-target-outline.inline.svg'
import EngageUsers from '~assets/svg/engage-users-outline.svg'
import OmniChannel from '~assets/svg/omnichannel-outline.svg'
import ChatMessageHeart from '~assets/svg/chat-message-heart-outline.svg'
import TodoList from '~assets/svg/to-do-list-outline.svg'
import MagnifierZoomSearch from '~assets/svg/magnifier-zoom-search-outline.svg'
import AvatarManApproved from '~assets/svg/avatar-man-approved-outline.svg'

const StatCard = ({ title, unit, description }) => (
  <div className="dark:bg-indigo-900 bg-gray-400 p-8 rounded">
    <div className="text-yellow-500">
      <span className="text-5xl">{title}</span>
      <span className="text-2xl pl-2">{unit}</span>
    </div>
    <div className="text-cyan-500 text-xl pt-2">{description}</div>
  </div>
)

const MethodCard = ({ title, children }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-24 h-24">{children}</div>
    <div className="text-2xl text-center text-cyan-500 pt-2">{title}</div>
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
        <h1 className="text-magenta-500 text-8xl tracking-wide">
          Thibault FRIEDRICH
        </h1>
        <h2 className="text-cyan-500 text-3xl tracking-wide pl-4 pt-5">
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
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-screen-lg m-auto justify-center">
        <h3 className="text-magenta-500 text-5xl text-center pb-12 pt-6">
          My Key Methods
        </h3>
        <div className="grid grid-cols-4 gap-12 max-w-screen-lg m-auto justify-center">
          <MethodCard title="Code craftmanship">
            <MultimediaCode2OutlineInline />
          </MethodCard>
          <MethodCard title="Agile methods">
            <ProjectManagement />
          </MethodCard>
          <MethodCard title="Lean product">
            <GoalTarget />
          </MethodCard>

          <MethodCard title="User-Centered design">
            <EngageUsers />
          </MethodCard>
        </div>
      </div>
    </section>
    <section className="grid grid-cols-2">
      <div className="dark:bg-indigo-900 bg-white-400 p-8">
        <h2 className="text-center text-3xl pb-8">Frontend developer</h2>

        <ul className="text-cyan-500 text-xl">
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
        <div className="text-cyan-500 pt-6">
          <div className="text-3xl">Dev Tools</div>
          <div>Vs Code, Postman, Git, Github, Jira, npm, ITerm, Notion</div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-center text-3xl pb-8">UX designer</h2>
        <ul className="text-cyan-500 text-xl">
          <li>User interviews</li>
          <li>Persona</li>
          <li>Userflows</li>
          <li>Mockup prototyping (Wireframes, high-fidelity)</li>
          <li>User journey map</li>
          <li>User story map</li>
        </ul>
        <div className="text-cyan-500 pt-6">
          <div className="text-3xl">Design Tools</div>
          <div>
            Adobe XD, Balsamiq, Miro, Procreate, Notion, One Note, Google sheet
          </div>
        </div>
      </div>
    </section>
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-lg m-auto justify-center">
        <h3 className="text-magenta-500 text-5xl text-center pb-12 pt-6">
          My Soft skills
        </h3>
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
      </div>
    </section>
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-lg m-auto justify-center">
        <h3 className="text-magenta-500 text-5xl text-center pb-12 pt-6">
          About me
        </h3>
        <p className="text-cyan-500 text-xl">
          I am a french frontend developer and ux designer living in Montreal
          and working in remote as a freelance. I am able to work in both french
          and english. In the past I led a frontend team for 2+ years with both
          freelance and employee status. I also worked as a volunteer to
          organize 2 Startup weekends in France and in particular in charge of
          sponsors. I studied computer science and human-computer interaction in
          the french Computer Science Engineer School ENSIMAG.
        </p>
      </div>
    </section>
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-lg m-auto justify-center">
        <h3 className="text-magenta-500 text-5xl text-center pb-12 pt-6">
          Contact
        </h3>
        <ul>
          <li>Email: thibault.friedrich@gmail.com</li>
          <li>Linkedin: https://www.linkedin.com/in/thibault-friedrich</li>
          <li>Github: https://thibault-friedrich.medium.com/</li>
        </ul>
      </div>
    </section>
    <footer className="p-12 text-center text-cyan-500">
      Made with love in Montreal
    </footer>
  </Layout>
)

export default IndexPage
