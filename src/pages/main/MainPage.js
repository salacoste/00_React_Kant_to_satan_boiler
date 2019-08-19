import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

class MainPage extends PureComponent {
  
  render () {
    console.log('MainPage props!', this.props)
    return (
      <Fragment>
        <Container style={{marginTop:'20px'}}>
          <Row>
            <Col>
              <h1>Main Page of Application </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ea eum alias dicta aliquid soluta hic nisi illum facilis ipsa!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ArticleList articles = {this.props.articles} comments = {this.props.comments} loadArticles = {this.props.loadArticles}/>
            </Col>
          </Row>
          
        </Container>
      </Fragment>
    )
  }
}

MainPage.propTypes = {
  ListHeader: PropTypes.number,

}

export default MainPage
