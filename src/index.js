import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Dashboard from './layouts/Dashboard'

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      {/*<Route exact path="/login" name="Login Page" component={Login} />
      <Route exact path="/register" name="Register Page" component={Register} />
      <Route exact path="/404" name="Page 404" component={Page404} />
      <Route exact path="/500" name="Page 500" component={Page500} />*/}
      <Route path="/" name="Home" component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
