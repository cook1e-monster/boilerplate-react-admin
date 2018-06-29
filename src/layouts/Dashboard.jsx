import React from 'react'
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'

import '@coreui/icons/css/coreui-icons.min.css'
import '../scss/style.css'

import { AppBreadcrumb, AppFooter, AppHeader, AppSidebar, AppSidebarNav } from '@coreui/react'
import { Header } from '../components/dashboard/Header'
import { routes } from '../config/routes'

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
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.url}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : null
              })}
            </Switch>
          </Container>
        </main>
      </div>

      {/* Footer */}
      <AppFooter>footer</AppFooter>
    </div>
  )
}
