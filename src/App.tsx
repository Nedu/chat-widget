import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ChatWidget from './features/ChatWidget/containers/ChatWidget'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ChatWidget />
      </Route>
    </Switch>
  </Router>
)

export default App
