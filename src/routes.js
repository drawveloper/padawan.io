import React from 'react'
import { Route, IndexRoute } from 'react-router'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage.js'

export default (
  <Route path="/">
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)
