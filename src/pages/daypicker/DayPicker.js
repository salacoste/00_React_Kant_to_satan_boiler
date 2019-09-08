import React, { PureComponent, Fragment} from 'react'
import ArticleList from '../../elements/articleList/articleList'
import {Container, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

import {Calendar} from '../../elements/daypicker/DayPicker'


//import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {CSSTransition} from 'react-addons-css-transition-group'


class DayPicker extends PureComponent {
  static propTypes = {
  filter: PropTypes.object,
  }

  static defaultProps = {

  }


  async componentDidMount() {
    await this.props.loadArticles()
    // setTimeout(()=>{console.log('12312333', this.props.articles, this.props.article_dates)}, 2000)
  }
  componentDidUpdate(prevProps) {
    console.log('666', this.props.filter)
    //console.log('777', this.props.article)
  }

  render() {
    // console.log('22', this.props.filter)
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
            <Calendar articleDates = {this.props.article_dates} filterArticle={this.props.filterArticle} />
          </Col>
        </Row>
        <Row>
          <h3>{this.props.articles.length !== this.props.filter.length? `Filtered Articles: ${this.props.filter.length}` : 'All Articles'}</h3>
          <Col sm={12}>
            <ArticleList articles = {this.props.filter} comments = {this.props.comments} loadArticles = {this.props.loadArticles} loadComments={this.props.loadComments} />
          </Col>
        </Row>
        </Container>
      </Fragment>
    )
  }

}

export default DayPicker