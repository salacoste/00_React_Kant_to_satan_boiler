import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col} from 'react-bootstrap'

class MainPage extends PureComponent {

  render () {
    return (
      <Fragment>
        <Container style={{marginTop:'20px'}}>
          <Row>
            <Col>
              <h1>Main Page of Application</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ea eum alias dicta aliquid soluta hic nisi illum facilis ipsa!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ArticleList/>
            </Col>
          </Row>
          
        </Container>
      </Fragment>
    )
  }
}

MainPage.propTypes = {
}

export default MainPage
