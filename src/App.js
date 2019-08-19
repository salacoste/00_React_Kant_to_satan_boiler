import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router-dom'

import theme from './utils/theme'

import Router from 'src/router'

export class App extends Component {
  state = {
    isLoaded: false
  }

  asyncF = async () => {
    await setTimeout(()=> {
      this.setState({isLoaded: true})
      console.log('done!')
    }, 2000)
  }

  componentWillMount() {
    // this.props.loadSession()
    this.asyncF()
  }

  render() {
    const {isLoaded} = this.state
    // const { isAppInitializing } = this.props

    // TODO: Add loader
    if (!isLoaded) {
      return (<div className="row">
        <div className="col-sm-12">
        <p>Loading...</p>
        </div>
      </div>)
    }

    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  isAppInitializing: this.asyncF
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
