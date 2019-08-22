import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'
import axios from 'axios'

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

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  entities: {},
  error: false,
  loading: false,
})

const arrayToObject = (arr) => {
  arr.reduce((acc, current, i) => {
    console.log('i is ' + i, acc, current)
    acc[current.id] = current
    return acc
  }, {})
}



// ---
// REDUCER
// ---

export default handleActions(
  {
    [ARTICLES_LOADING]: (state, action) => {
      console.log('reducer ARTICLES START LOADING action', action)
      axios.get(url)
      .then((r)=> {
        console.log('array to Object', arrayToObject(r.data))
        
        console.log('rrrr', r.data)
        return Immutable.setIn
      })
      .catch((e)=> {
        console.log('Error is occured', e)
      })
      return Immutable.merge(state, { loading: true } )},
  },
  initialState
)