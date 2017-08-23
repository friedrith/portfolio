import React from 'react'
import Youtube from 'react-youtube'
import { Link } from 'react-router-dom'

import style from './AgileTouch.style'

const AgileTouch = () => (
  <div className={style.agileTouch}>
    <Link className={style.back} to="/">
      <i className="ti-arrow-left" />
    </Link>

    <div className={style.content}>
      <h1 className={style.title}>Agile Touch</h1>
      <h2 className={style.subtitle}>Idea</h2>
      <p>
        During my second year of engineer school,
        I imagined the concept of the Agile Touch, an augmented backlog for agile development.
        The idea comes from a real problem. A standard backlog for scrum methods is a simple
        blackboard on which developers stick post-it notes. It very simple to use and post-its
        incitate to interactivity and collaboration.
      </p>
      <img className={style.img} src={require('./img/scrum.jpg')} alt="scrum" />
      <p>
        However, it also has several lackings :
      </p>
      <ul>
        <li>
          there is no saves: if you lost a postit or if it falls, you
          lost the history of your project
        </li>
        <li>
          the backlog is not mobile: you cannot manage your project
          if you are not in your office.
        </li>
        <li>
          you cannot use your backlog for a team dispersed all around the world.
        </li>
        <li>
          There not code versioning integration (git, svn, etc).
        </li>
        <li>
          There is no time tracker whereas it is a feature essential in project management.
        </li>
      </ul>
      <p>
        Of course developers using scrum backlog sometimes find solutions
        like taking photo for saving,
        duplicating with an excel file for mobility, but it costs time
        and efficiency. And most of the
        time, they switch to online backlogs like trello, jira, etc.
      </p>
      <p>
        In this context, I wanted to propose a new scrum backlog based on augmented reality.
        Through a school project, I gathered a team and we wrote our own project.
      </p>
      <h2 className={style.subtitle}>Concept</h2>
      <p>
        Our concept is based on mixing reality and digital. We indeed wanted to get the benefits of
        both blackboard backlogs and digital backlogs. So our backlog is a real physical blackboard
        which detect and saves all post-its. It can also add virtual
        post-its that represent post-its
        existing on an other instance of the backlog located somewhere else in the world.
      </p>
      <p>
        We implemented this concept in 3 weeks with a team of 4 students.
      </p>
      <Youtube videoId="fKBfBBpyoyE" className={style.youtube} />
      <h2 className={style.subtitle}>Architecture overview</h2>
      <p>
        The agile touch was composed by a touch table to detect post-its movements,
        a camera to scan post-its and a projector to display the virtual post-its.
        The touch table was an old DiamondTouch device lent by the user
        interface laboratory of grenoble.
        Photos of Post-Its were taken using a Marlin telecamera.
        These two devices needed an Apple computer to run: one because the drivers
        we had are mac-only, and the other because it uses a Firewire cable.
        Then the main application was hosted on the Linux PC of one of the
        team members, which was connected to the video projector. It also hosted
        the database where post-its are stored. Finally a third PC was used to
         emulate distant use cases.
      </p>
      <img alt="architecture" src={require('./img/agiletouch_archi.png')} className={style.img} />
      <p>
        The main challenge was the drivers because the devices were quite old.
        The scan of the post-its was also very hard because of luminosity.
        Finaly, we also had to
        work on the Ux in order to get a user experience as close as possible to the
        backboard backlog.
      </p>

      <img alt="scan" src={require('./img/agiletouch_post_it_steps.png')} className={style.img} />
      <h2 className={style.subtitle}>Conclusion</h2>

      <p>
        It was a rich experience because we were totally alone on this project.
        Since we conceived the project ourself, teachers were not able to help us.
        It was also very intense. And we are very proud to have succeeded it
        only 3 weeks.
      </p>
    </div>
  </div>
)

export default AgileTouch
