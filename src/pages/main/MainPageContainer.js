import { connect } from 'react-redux'
import MainPage from './MainPage'
import {normalizedArticles, normalizedComments} from '../../utils/fixtures'
import {articles_loading} from '../../store/reducers/articles/articlesReducer'
import {getArticles} from '../../store/reducers/articles/articlesSelector'


const mapStateToProps = (state, props) => {
  console.log('mapStateToProps of Articles', state)
  return {
  articles: getArticles,
  //articles: normalizedArticles,
  comments: normalizedComments,
  }
}



const mapDispatchToProps = {
  loadArticles: articles_loading
}

//  OR Dispatch from function
//  const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     example: (argument_from_call)=>{
//       dispatch(actionCreatorName(ownProps, i))
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
