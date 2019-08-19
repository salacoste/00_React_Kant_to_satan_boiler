import React, {PureComponent, Fragment} from 'react'
import {Accordion, Card, Button, Row, Col} from 'react-bootstrap'
import {normalizedArticles, normalizedComments} from '../../utils/fixtures'



export class CommentList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      btnState: false
    }
  }

  handlerButton = () => {
    this.setState({btnState: !this.state.btnState})
    this.props.handlerComments()
  }

  render() {
    return (
      <Row>
        <Col lg={12}>
        <Button variant="primary" onClick={this.handlerButton}>{!this.state.btnState? 'Show comments' : 'Close comments'}
        </Button>
        </Col>
        <Col lg={12}>
        <Fragment>
          <p>Lorem ipsum dolor sit amet.</p>
        </Fragment>
        </Col>
      </Row>
    )
  }
  
  


}