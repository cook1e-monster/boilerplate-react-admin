import React from 'react'
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import '@coreui/icons/css/coreui-icons.min.css'
import '../scss/style.css'

import { AppBreadcrumb, AppFooter, AppHeader, AppSidebar, AppSidebarNav } from '@coreui/react'
import { Header } from '../components/dashboard/Header'
import { routes } from '../config/routes'

function renderRoute(route, idx) {
  return (
    <Route
      key={idx}
      path={route.url}
      exact={route.exact}
      name={route.name}
      render={props => <route.component {...props} />}
    />
  )
}

function renderRoutes(routes) {
  return routes.map((route, idx) => {
    if (route.children && route.children.length)
      return route.children.map((route, idx) => (route.component ? renderRoute(route, idx) : null))

    return route.component ? renderRoute(route, idx) : null
  })
}

export default function Dashboard(props) {
  return (
    <div className="app">
      {/* navbar */}
      <AppHeader fixed>
        <Header />
      </AppHeader>

      <div className="app-body">
        {/* side bar */}
        <AppSidebar fixed display="lg">
          <AppSidebarNav navConfig={{ items: routes }} {...props} />
        </AppSidebar>

        <main className="main">
          <AppBreadcrumb appRoutes={routes} />

          <Container fluid>
            <Switch>{renderRoutes(routes)}</Switch>
          </Container>
        </main>
      </div>

      {/* Footer */}
      <AppFooter>footer</AppFooter>
    </div>
  )
}
