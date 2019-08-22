import {createSelector} from 'reselect'

export const getArticles = (store,ownProps) => store.articles.entities
export const getComments = (store,ownProps) => store.comments.entities
// export const getExampleText = state => state.exampleReducer.text
// export const getExchangeRandom = state => state.exampleReducer.random

export const getFilteredArticles = createSelector([getArticles, getComments], (articles, comments)=> {
  console.log('from articles selector, articles is ', articles, 'comments are ', comments)
  return articles
})
