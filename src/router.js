import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import MainPage from 'src/pages/main/MainPageContainer'
import MainLayout from 'src/layouts/MainLayout'

import DayPickerLayout from 'src/layouts/DayPickerLayout'
import DayPicker from 'src/pages/daypicker/DayPickerContainer'

import NotFound from 'src/pages/404/404'
import {Route as R} from 'react-router-dom'

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
        <AppRoute exact path='/' layout={MainLayout} component={MainPage} />
        <AppRoute exact path='/daypicker' layout={DayPickerLayout} component={DayPicker}/>
        <R component={NotFound}/>
      </Switch>
    )
  }
}

export default withRouter(Routes)
