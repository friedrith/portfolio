import React, { useState } from 'react'

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
// import Laptop from '~atoms/Laptop'
import ProjectCard from '~atoms/project-card'

import multimediaCode2 from '~assets/multimedia-code-2-outline-edited.json'
import projectManagement from '~assets/project-management-outline-edited.json'
import engageUsers from '~assets/engage-users-outline-edited.json'
import johann from '~assets/johann.png'

// const Method = ({ title, children, ...props }) => (
//   <div className="flex flex-col justify-center items-center" {...props}>
//     <div className="w-20 h-20 md:w-24 md:h-24">{children}</div>
//     <div className="text-xl md:text-2xl text-center text-blue-500 pt-2 font-light">
//       {title}
//     </div>
//   </div>
// )

// const Skill = ({ title, description }) => (
//   <li>
//     <span className="text-2xl">{title}</span>
//     {description ? <span className="text-base"> ({description})</span> : ''}
//   </li>
// )

const IndexPage = () => {
  return (
    <Layout>
      {/* <SEO title="Thibault Friedrich - Frontend Freelance" /> */}
      <section className="min-h-screen flex flex-col relative">
        {/* <div className="absolute h-full w-full z-40">
          <Laptop />
        </div> */}
        <div className="flex-1 flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-32 relative z-30">
          <div className="md:flex-1">
            {/* <Reveal effect="fadeInLeft" mountOnEnter>
              <h1 className="text-white-500 text-center md:text-left text-3xl md:text-5xl 2xl:text-8xl tracking-wide font-light">
                Thibault FRIEDRICH
              </h1>
            </Reveal>
            <Reveal effect="fadeInLeft" mountOnEnter delay={200}>
              <h2 className="text-purple-500 text-center md:text-left font-normal text-2xl 2xl:text-3xl tracking-wide md:pl-4 pt-5">
                Frontend Developer / Ux Designer
              </h2>
            </Reveal> */}
          </div>
        </div>
        <div className="p-5 absolute z-50 bottom-0 inset-x-0 flex justify-center">
          <MouseIndicator />
        </div>
      </section>
      <section className="min-h-screen flex flex-col relative"></section>
    </Layout>
  )
}

export default IndexPage
