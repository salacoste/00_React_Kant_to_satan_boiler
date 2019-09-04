import { connect } from 'react-redux'
import DayPicker from './DayPicker'

import {articles_thunk} from '../../store/reducers/articles/articlesReducer'
import {comments_thunk} from '../../store/reducers/comments/commentsReducer'

import {getArticlesInArray, getDatesOfArticles} from '../../store/reducers/articles/articlesSelector'
import {getCommentsInArray} from '../../store/reducers/comments/commentsSelector'


const mapStateToProps = (state, props) => {
  // console.log('mapStateToProps of Articles', state)
  return {
  articles: getArticlesInArray(state, props),
  comments: getCommentsInArray(state,props),
  article_dates: getDatesOfArticles(state, props)
  }
}



const mapDispatchToProps = {
  loadArticles: articles_thunk,
  loadComments: comments_thunk,
}



export default connect(mapStateToProps, mapDispatchToProps)(DayPicker)
