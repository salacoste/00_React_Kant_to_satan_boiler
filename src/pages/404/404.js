import React, {Fragment} from 'react'
import NavBar from '../../elements/navbar/Navbar'
import {Row, Col, Container} from 'react-bootstrap'


export default () => {
  return ( 
  <Fragment>
    <Fragment>
      <NavBar/>
    </Fragment>
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h3>Sorry, page not found!</h3>
          </Col>
        </Row>
      </Container>
    </Fragment>
  </Fragment>
  )
}