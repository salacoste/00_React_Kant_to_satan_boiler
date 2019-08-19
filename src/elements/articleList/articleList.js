import React, {PureComponent, Fragment} from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
import {CommentList} from '../commentsList/commentsList'

class ArticleList extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      defaultActiveKey: undefined,
      comments: [],
    }
  }

  handlerComments = (id) => {
    //handler for Comment Open/Close button
    this.props.loadArticles()
  }

  getArticles = () => {
    return this.props.articles.map((item)=> {
      return (
      <Card key={item.id}>
        <Card.Body>
          <small>Date: {item.date}</small>
          <h3>{item.title}</h3>
        </Card.Body>
        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
        Show more..
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={item.id}>
          <div>
          <Card.Body>
          <p>
            {item.text}
          </p>
          <CommentList handlerComments={this.handlerComments}/>
          </Card.Body>
          </div>
        </Accordion.Collapse>
      </Card> 
      )})
  }
  componentDidMount() {
  // this.setState({articles: normalizedArticles, defaultActiveKey: normalizedArticles[0].id})
  }
  
  render() {
  return (
  <Fragment>
    <Accordion defaultActiveKey={this.state.defaultActiveKey || "0"}>
    {this.getArticles()}
    </Accordion>
  </Fragment>
  )
  }


}

export default ArticleList
