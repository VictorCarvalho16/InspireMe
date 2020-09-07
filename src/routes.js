import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Home from './pages/Home'
import SearchTalks from './pages/SearchTalks'
import PlayTalk from './pages/PlayTalk'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/home" component={Home} />
        <Route path="/search-talks" component={SearchTalks} />
        <Route path="/play-talk" component={PlayTalk} />
      </Switch>
    </BrowserRouter>
  )
}
