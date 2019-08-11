import React, {PureComponent, Fragment} from 'react'
import {Accordion, Card} from 'react-bootstrap'


class ArticleList extends PureComponent {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
  return (<Fragment>
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Fragment>)
  }


}

export default ArticleList
