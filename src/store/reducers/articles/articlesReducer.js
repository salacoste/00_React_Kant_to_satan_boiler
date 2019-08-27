import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'
import axios from 'axios'

import {COMMENTS_ADDING} from '../comments/commentsReducer'

// ---
// CONSTANTS
// ---

export const ARTICLES_START = 'articles/START'
export const ARTICLES_LOADING = 'articles/LOADING'
export const ARTICLES_LOADED = 'articles/LOADED'
export const ARTICLES_ERROR = 'articles/ERROR'


/// ---
// AXIOS CONSTANTS
/// ---

const url = 'https://5b1eb7944d4fc00014b07e1e.mockapi.io/kantor_articles'


// ---
// ACTION CREATORS
// ---

export const articles_start = createAction(ARTICLES_START)
export const articles_loading = createAction(ARTICLES_LOADING)
export const articles_loaded = createAction(ARTICLES_LOADED)
export const articles_error = createAction(ARTICLES_ERROR)

export const articles_thunk = ()=> {
  return (dispatch, getState) => {
    dispatch(articles_loading())

    // async articles loading
    axios.get(url)
      .then((r)=> {
        const ArticlesObj = arrayToObject(r.data)
        // console.log('ArticlesToObj', ArticlesObj)
        dispatch(articles_loaded(ArticlesObj))
      })
      .catch((e)=> {
        console.log('Error is occured', e)
        dispatch(articles_error(e))
      })

  }
}


// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  entities: {
  },
  error: false,
  loading: false,
  loaded: false,
})

export const arrayToObject = (arr) => {
  const a =  arr.reduce((acc, current, i) => {
    // console.log('i is ' + i, acc, current)
    acc[current.id] = current
    return acc
  }, {})
  return a
}



// ---
// REDUCER
// ---


const reducerMap = {
  [ARTICLES_LOADING]: (state, action) => {
      return state.set("loading", true)
    },
    [ARTICLES_LOADED]: (state, action) => {
      const data = action.payload
      return Immutable.merge(state, {loading: false, entities: {...state.entities, ...data}, loaded: true})
    },
    [ARTICLES_ERROR]: (state, action) => {
      return state.set("error", true)
    },
    [COMMENTS_ADDING]: (state, action) => {
      console.log('BAAAAM!')
      return Immutable.setIn(state, ['entities', action.payload.articleId, "comments"], [...state.articles.entities[action.payload.articleId].comments, action.payload.id])
    }
  }


export default handleActions(reducerMap, initialState)
    
    