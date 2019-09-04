import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

import {Calendar} from '../../elements/daypicker/DayPicker'


//import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {CSSTransition} from 'react-addons-css-transition-group'


class DayPicker extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }


  async componentDidMount() {
    await this.props.loadArticles()
    setTimeout(()=>{console.log('12312333', this.props.articles, this.props.article_dates)}, 2000)
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
            <Calendar articleDates = {this.props.article_dates} />
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }

}

export default DayPicker