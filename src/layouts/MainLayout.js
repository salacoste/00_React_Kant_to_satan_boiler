import React, { PureComponent } from 'react'
import styled from 'styled-components'
import * as Bootstrap from 'react-bootstrap'
let {Navbar, Nav, Form, FormControl, Button, NavDropdown, Row, Container} = Bootstrap

class MainLayout extends PureComponent {
  render () {
    console.log('MainLayout props', this.props)
    return (
      <Wrapper >
            <Navbar bg="dark" expand="lg" variant="dark" >
              <Navbar.Brand>Article Main Page</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/daypicker">DayPicker</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          <main>
          { this.props.children }
          </main>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100%,
`

export default MainLayout
