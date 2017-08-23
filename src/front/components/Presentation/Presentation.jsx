import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import loader from 'hoc-react-loader'
// import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
// import snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

import params from './params'

import style from './Presentation.style'

import EyeCatcher from '../EyeCatcher'

/* global window */
const openEmail = () => {
  console.log('ok')
  const part1 = 'thibault.friedrich'
  const part2 = 'gmail.com'
  window.location.href = `mailto:${part1}@${part2}`
}

class Presentation extends Component {
  constructor() {
    super()
    this.state = {
      currentSlide: 0,
      activeRight: false,
      activeLeft: false,
      currentFuture: 0,
    }

    this.slideCount = 8

    this.goToRight = this.goToRight.bind(this)
    this.goToLeft = this.goToLeft.bind(this)
    this.openNewTab = this.openNewTab.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      let nextFuture = this.state.currentFuture + 1
      if (nextFuture > 4) {
        nextFuture = 0
      }
      this.setState({
        currentFuture: nextFuture,
      })
    }, 10000)

    // this.svg = snap('#svg')
    // const bigCircle = this.svg.circle(150, 150, 100)
    // this.svg.text(300, 300, 'fdsfds')
  }


  openNewTab(event) {
    console.log('link', event.target.attr('href'))
  }



  goToRight() {
    if (this.state.currentSlide < this.slideCount - 1) {
      this.setState({
        currentSlide: this.state.currentSlide + 1,
        // activeRight: true,
      })

      // setTimeout(() => {
      //   this.setState({
      //     activeRight: false,
      //   })
      // }, 500)
    }
  }

  goToLeft() {
    if (this.state.currentSlide > 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1,
        // activeLeft: true,
      })

      // setTimeout(() => {
      //   this.setState({
      //     activeLeft: false,
      //   })
      // }, 500)
    }
  }

  render() {
    return (
      <div className={`${style.presentation}`} >

        <div className={style.part1}>
          <Particles style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }} params={params} />

          <div className={style.text}>
            <h1 className={style.name}>Thibault FRIEDRICH</h1>
            <h2 className={style.description}>Ux R&D engineer looking for great adventures</h2>
          </div>
          <div className={style.eyeCatcher}>
            <EyeCatcher />
          </div>
        </div>
        <div className={style.part}>
          <div className={style.text}>
            <img src={require('./img/portrait.png')} className={style.portrait} alt="portrait" />
            <h2 className={style.title}>
              About me
            </h2>
            <p className={style.description}>
              I am Thibault Friedrich, a 26 years old French engineer specialized in R&D and Ux.
            </p>
            <p className={style.description}>
              I love coding, prototyping new stuffs, talk to users, improving user interfaces, learning new things and so much more.
            </p>
            <p className={style.description}>
              Very polyvalent, I am good to find technological
              solutions to challenging situations.
            </p>
          </div>
        </div>
        <div className={`${style.projects}`} style={{ 'background-position': `${4 * this.state.currentSlide}% bottom` }}>
          {
            this.state.currentSlide > 0 ?
              <div className={`${style.nav} ${style.navLeft}`} >
                <div className={style.button} onClick={this.goToLeft}>
                  <div className={`${style.arrow} ${this.state.activeLeft ? style.active : ''}`}  />
                </div>
              </div> : null
          }
          {
            this.state.currentSlide < this.slideCount - 1 ?
              <div className={`${style.nav} ${style.navRight}`} >
                <div className={style.button} onClick={this.goToRight}>
                  <div className={`${style.arrow} ${this.state.activeRight ? style.active : ''}`}  />
                </div>
              </div> : null
          }

          <div className={style.list} style={{ left: `${-this.state.currentSlide * 100}%`, width: `${this.slideCount * 100}%` }}>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.description}>
                  <p>
                    Discover me through my projects.
                    They represent what matters for me: Simplicity, Security, Innovation.
                  </p>
                  <p>
                  The following list is a selection of my favorites projects.
                  </p>
                  <p>Good visit ;)</p>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Natural-Script</h2>
                <img className={style.logo} alt="logo" src={require('./img/waves-color.png')} />
                <p className={style.slideSubtitle}>
                  Natural-script is a script language to describe
                  english expressions without taking account of spelling mistakes,
                  case sensitity, punctuations or other human language aleas.
                  It is very useful to build chat bots.
                </p>
                <p className={style.slideDescription}>
                  Natural-script is a node library distributed on npm that can
                  detect complex structures
                  like dates, occurrences, locations in natural English language.
                  The challenge was to plug it
                  to several existing parsers in order to detect the complex patterns.
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href="https://github.com/friedrith/natural-script" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Go to Github</div>
                  </a>
                  <a className={style.animatedButton} href="http://ns.techmind.io" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Try demo</div>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Vault</h2>
                <img className={style.logo} alt="logo" src={require('./img/react_drive.png')} />
                <p className={style.slideSubtitle}>
                  Vault is a secure storage online using Google Drive.
                  Users just need to connect their Google account, choose their
                  passphrase and type.
                </p>
                <p className={style.slideDescription}>
                  Vault is a React.js project using AES-256bit encryption in the browser to save encrypted data in the
                  Google Drive account of each user. So it is illimited in space (only Google limit), free and protected
                  even against Google. It is fully operationnal and totally secured from our side (severless).
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href="https://github.com/getvault/getvault.github.io" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Go to Github</div>
                  </a>
                  <a className={style.animatedButton} href="https://getvault.github.io" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Use it</div>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Node-wifi</h2>
                <img className={style.logo} alt="logo" src={require('./img/node-wifi-yellow.png')} />
                <p className={style.slideSubtitle}>
                  Node-wifi is a node library to help managing wifi
                  (connection, disconnection, scan) in node.js whatever the platform is:
                  Windows, Linux or MacOS.
                </p>
                <p className={style.slideDescription}>
                  At the beginning, it was a library implemented in my startup but I maintained it on my own.
                  It is now available on npm and meets a little success.
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href="https://github.com/elqui-app/node-wifi" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Go to Github</div>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Pm2-deployer</h2>
                <img className={style.logo} alt="logo" src={require('./img/pm2.png')} />
                <p className={style.slideSubtitle}>
                  I needed a system to automatically redeploy my web applications hosted on my
                  dedicated servers when the reposity changes like on heroku for example. So I built my own on the top of
                  pm2. It is very easy to use and works perfectly on several production environments.
                </p>
                <p className={style.slideDescription}>
                  It uses pm2 config file with a little upgrade and catch git webhooks
                  (github, bitbucket for now)
                  to automatically checkout, build and restart a web application after a push.
                  At the end, it even pushes a notification on slack.
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href="https://github.com/friedrith/pm2-deployer" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Go to Github</div>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Canvas</h2>
                <img className={style.logo} alt="logo" src={require('./img/macbook3.png')} />
                <p className={style.slideSubtitle}>
                  This is a website to write your business canvas online, share it and export it as Pdf.
                </p>
                <p className={style.slideDescription}>
                  For now, it manages business modal canvas and value proposition canvas
                  but it is very easy to add new one.
                  It is implemented with Angular.js
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href="https://github.com/friedrith/canvas" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Go to Github</div>
                  </a>
                  <a className={style.animatedButton} href="http://canvas.techmind.io" target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Use it</div>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Agile Touch</h2>
                <p className={style.slideSubtitle}>
                  Agile Touch is a school-related project to create an enhanced scrum backlog
                  based on augmented reality.
                </p>
                <p className={style.slideDescription}>
                  Agile Touch can detect movement on the backlog, scan postits and
                  project virtual post-it on the backlog.
                  We develop this project in C++/Qt/OpenCV from scratch without
                  any help and succeeded to implement a prototype of digital scrum
                  backlog in 3 weeks in a team of 4 students.
                </p>
                <div className={style.buttons}>
                  <Link className={style.animatedButton} to="/project/agile-touch">
                    <div className={style.label}>Go to page</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.slide} style={{ flex: `0 0 ${100 / this.slideCount}%` }}>
              <div className={style.content}>
                <h2 className={style.title}>Plasticity of Human Machine Interfaces</h2>
                <p className={style.slideSubtitle}>
                  During my 2nd year engineer school,
                  I began working as researcher in laboratory in the Computer
                  Laboratory of Grenoble (called LIG), 7 hours per week.
                </p>
                <p className={style.slideDescription}>
                  I worked on the adaptation of interfaces to users and I have been
                  able to propose a new way to classify interface adaptations
                  based on space and time factors.
                  I followed researcher methodology with studying the state of
                  the art, gathering, extract and filter information from different
                  scientific publications.
                </p>
                <div className={style.buttons}>
                  <a className={style.animatedButton} href={require('./pdf/interfaces.pdf')} target="_blank" rel="noopener noreferrer">
                    <div className={style.label}>Download article</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.part} ${style.skills}`}>
          <div className={style.text}>
            <h2 className={style.title}>Skills</h2>
            {/* <div className={style.main}>
              <img className={style.skill} alt="skill" src={require('./img/skill-web.png')} />
              <img className={style.skill} alt="skill" src={require('./img/skill-web.png')} />
              <img className={style.skill} alt="skill" src={require('./img/skill-web.png')} />
            </div>
            <svg className={style.svg} id="svg" /> */}

            <table className={style.skillList}>
              <tbody>
                <tr>
                  <td className={style.skillTitle}>Dev</td>
                  <td />
                </tr>
                <tr>
                  <td className={style.skillName}>Js (React, AngularJs, Node)</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Css (Less, Sass)</td>
                  <td className={style.skillValue}>
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>C++ (Qt)</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Php (Symfony)</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Java (Eclipse, Android)</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillTitle}>Ux</td>
                  <td />
                </tr>
                <tr>
                  <td className={style.skillName}>User Experience Modelization</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Analyze of user needs</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Prototyping</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillTitle}>SysAdmin</td>
                  <td />
                </tr>
                <tr>
                  <td className={style.skillName}>Bash</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>Python</td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>
                    Linux (Debian, Ubuntu, ArchLinux, Fedora, CentOS)
                  </td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>
                    Continuous Integration (Jenkins)
                  </td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
                <tr>
                  <td className={style.skillName}>
                    Acceptance tests (unit, functional, integration)
                  </td>
                  <td className={style.skillValue}>
                    <div className={style.skillTab} />
                    <div className={style.skillTab} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                    <div className={`${style.skillTab} ${style.check}`} />
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={style.skillMore}>
              My startuper experience also teachs me skills in management,
              human resources, funding, marketing.
            </p>

          </div>

        </div>
        <div className={`${style.part} ${style.vision}`}>
          <div className={`${style.backgroundBack} ${style.backgroundUi}`} style={this.state.currentFuture === 0 ? { opacity: 1 } : {}} />
          <div className={`${style.backgroundBack} ${style.backgroundSpacex}`} style={this.state.currentFuture === 1 ? { opacity: 1 } : {}} />
          <div className={`${style.backgroundBack} ${style.backgroundExMachina}`} style={this.state.currentFuture === 2 ? { opacity: 1 } : {}} />
          <div className={`${style.backgroundBack} ${style.backgroundAugmentations}`} style={this.state.currentFuture === 3 ? { opacity: 1 } : {}} />
          <div className={`${style.backgroundBack} ${style.backgroundColonization}`} style={this.state.currentFuture === 4 ? { opacity: 1 } : {}} />

          <div className={style.left}>
            <div className={style.background} />
            <div className={style.text}>
              <h2 className={style.title}>I want to be <br /> part of the future</h2>
              <div className={style.description}>
                <p>
                  I am looking for an opportunity as a R&D engineer to build innovative user
                  interactions (visual, vocal, touch, ...) in disruptive areas like robotics,
                  home automation, human augmentations, space...
                </p>
                <p>
                  I am competent at every stage of the development of an interface, from the user needs analyze to the implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.part} ${style.contact}`}>
          <div className={style.text}>
            <h2 className={style.title}>Want to hire me?</h2>
            <p className={style.description}>
              I am available right now and ready to go everywhere around the world.
            </p>
            <p className={style.description}>
              Do not hesitate to contact me or check my curriculum vitae.
            </p>
            <div className={style.buttons}>
              <a className={`${style.animatedButton} ${style.black}`} href={require('./pdf/cv.pdf')} target="_blank" rel="noopener noreferrer">
                <div className={style.label}>Download cv</div>
              </a>
            </div>
            <div className={style.separator} />
            <div className={style.socials}>
              <div className={style.social} onClick={openEmail}>
                <i className="ti-email" />
                <div className={style.label}>Email</div>
              </div>
              <a className={style.social} href="https://www.linkedin.com/in/thibault-friedrich-9a132946/" target="_blank" rel="noopener noreferrer">
                <i className="ti-linkedin" />
                <div className={style.label}>Linkedin</div>
              </a>
              <a className={style.social} href="https://twitter.com/R_Thibault_Oliw" target="_blank" rel="noopener noreferrer">
                <i className="ti-twitter" />
                <div className={style.label}>Twitter</div>
              </a>
              <a className={style.social} href="https://github.com/friedrith" target="_blank" rel="noopener noreferrer">
                <i className="ti-github" />
                <div className={style.label}>Github</div>
              </a>
              <a className={style.social} href="https://www.instagram.com/r_thibault_oliw" target="_blank" rel="noopener noreferrer">
                <i className="ti-instagram" />
                <div className={style.label}>Instagram</div>
              </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

// const LoadingIndicator = () => {
//   return (
//     <div>dsqdq</div>
//   )
// }

// export default loader(Presentation, { LoadingIndicator })

export default Presentation
