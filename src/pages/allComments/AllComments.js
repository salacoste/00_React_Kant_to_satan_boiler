import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col, Pagination} from 'react-bootstrap'
import PropTypes from 'prop-types'
//import {CSSTransition, TransitionGroup} from 'react-transition-group'
import CSSTransition from 'react-addons-css-transition-group'

import './styles.css'

class AllComments extends PureComponent {

  componentDidMount() {
    if (!this.props.loaded) {
      this.props.loadComments()
    }
    
  }

  getComments() {
    // console.log('2111', this.props.comments)
    return this.props.comments.map((comment)=> {
      return (<li key={comment.id}>
        <h5>{comment.user}</h5>
        <p>
          {comment.text}
        </p>
      </li>)
    })
  }
  
  render () {
    return (
      <Fragment>
        <Container style={{marginTop:'20px'}}>
          <Row>
            <Col>
              <h1>All Comments</h1>
              <p>List of all comments from database.</p>
            </Col>
          </Row>
          <Row> 
            <Col>
            <CSSTransition transitionName="articleList" 
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {/* <ArticleList articles = {this.props.articles} comments = {this.props.comments} loadArticles = {this.props.loadArticles} loadComments={this.props.loadComments} /> */}
              <ul>
                <p>Lorem, ipsum dolor.</p>
                {this.getComments()}
              </ul>
              <Pagination>
              <Pagination.Item key={1} active={true}>
                1
              </Pagination.Item>
              <Pagination.Item key={1} active={false}>
                2
              </Pagination.Item>
              <Pagination.Item key={1} active={false}>
                3
              </Pagination.Item>
              </Pagination>
              
            </CSSTransition>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

AllComments.propTypes = {
  ListHeader: PropTypes.number,
  articles: PropTypes.array,
  comments: PropTypes.array

}

export default AllComments
