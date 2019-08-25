import React, {PureComponent, Fragment} from 'react'
import { connect } from 'react-redux'

import {Accordion, Card, Button, Row, Col} from 'react-bootstrap'
import {normalizedArticles, normalizedComments} from '../../utils/fixtures'
import {ListGroup} from 'react-bootstrap'

import {filteredComments} from '../../store/reducers/comments/commentsSelector'



export class CommentList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      btnState: false
    }
  }

  handlerButton = () => {
    this.setState({btnState: !this.state.btnState})
    // console.log('!!!!', this.props.comments)
    this.props.loadComments()
  }

  counterComments = () => {
    if (this.props.article.comments) {
      return this.props.article.comments.length
    }
    else {
      return 0
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <h5>Comments for Article {this.props.articleId}</h5>
          { this.props.comments && 
              (<h6>
              Comments for article: {this.props.commentsCount}
            </h6>)
          }
          <Button variant="primary" onClick={this.handlerButton}>{!this.state.btnState? 'Show comments' : 'Close comments'}  </Button>
        </Col>
        </Row>
        {this.state.btnState &&
          <Row style={{'marginTop':'15px'}}>
            <Col>
            <ListGroup>
            {this.props.comments.length>0? this.props.comments.map((comment)=> {
              return (
                <ListGroup.Item key={comment.id}>
                  <p>User: {comment.user}</p>
                  <p>Text: {comment.text}</p>
                </ListGroup.Item>
              )
            }): <p>There are no comments</p>}
            </ListGroup>
            </Col>
          </Row>
        }
      </div>
    )
  }
  
  


}


const mapStateToProps = (state, props) => {
  // console.log('mapStateToProps of Articles', state)
  return {
  // l: getFilteredArticles(state, props),
  //articles: getArticlesInArray(state, props),
  // comments: getCommentsInArray(state,props),
  comments: filteredComments(state, props)
  }
}



const mapDispatchToProps = {
  // loadArticles: articles_thunk,
  // loadComments: comments_thunk,
}



export default connect(mapStateToProps, mapDispatchToProps)(CommentList)