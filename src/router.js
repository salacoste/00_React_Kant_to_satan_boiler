import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import MainLayout from 'src/layouts/MainLayout'

import MainPage from 'src/pages/main/MainPageContainer'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    console.log('props', props, rest)

    return (
      <Layout>
        <Component {...props} {...rest} />
      </Layout>
    )
  }} />
)

export class Routes extends PureComponent {
  render () {
    return (
      <Switch>
        <AppRoute exact path='/articles/' layout={MainLayout} component={MainPage} t={2} />
        
      </Switch>
    )
  }
}

export default withRouter(Routes)
