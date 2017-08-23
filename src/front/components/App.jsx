import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Presentation from './Presentation'
import AgileTouch from './Projects/AgileTouch'

import '../global.scss'

const App = () => {
  return (
    <div className="app">
      <Router>
        <div>
          <Route exact path="/" component={Presentation} />
          <Route exact path="/project/agile-touch" component={AgileTouch} />

          {/* <Route path="/presentation" component={Presentation} />
          <Route path="/projects/plasticity-interfaces" component={Research} />
          <Route path="/projects/agile-touch" component={AgileTouch} />
          <Route path="/projects(/:projectId)" component={Projects} />
          <Route path="/vision" component={Vision} />
          <Route path="/contact" component={Contact} /> */ }
        </div>
      </Router>
    </div>
  )
}
App.propTypes = {}

// export default loader(App, { Loader: null })
export default App
