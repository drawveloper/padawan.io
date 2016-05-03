import React from 'react'
import { Route, IndexRoute } from 'react-router'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage.js'
import NotFoundPage from './pages/NotFoundPage.js'

export default (
  <Route path="/">
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
)
