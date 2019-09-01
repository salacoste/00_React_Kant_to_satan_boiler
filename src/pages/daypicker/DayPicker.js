import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

import {DayPicker as DayPickerC} from '../../elements/daypicker/DayPicker'


//import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {CSSTransition} from 'react-addons-css-transition-group'


class DayPicker extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <Fragment>
        <Container>
        <Row> 
          <Col>
            <h1>
              Filter Articles
            </h1>
          </Col>
          <Col sm={12} className='text-center'>
            <DayPickerC/>
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }

}

export default DayPicker