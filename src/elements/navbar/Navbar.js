import React, { PureComponent, Fragment } from 'react'
// import PropTypes from 'prop-types'
import * as Bootstrap from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {withRouter} from 'react-router-dom'

let {Navbar, Nav, Button, NavDropdown, Row, Container, NavItem} = Bootstrap



class NavBarElement extends PureComponent {
  render() {
    return <Fragment>
              <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
                      <Navbar.Brand>Article Main Page</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                          <LinkContainer exact to='/'>
                            <Nav.Link>Home</Nav.Link>
                          </LinkContainer>
                          <LinkContainer exact to='/daypicker'>
                            <Nav.Link>DayPicker</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to='/allcomments'>
                            <Nav.Link>All Comments</Nav.Link>
                          </LinkContainer>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
            </Fragment>
  }
}

export default withRouter(NavBarElement)