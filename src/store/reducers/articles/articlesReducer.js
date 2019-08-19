import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---

export const ARTICLES_START = 'articles/START'
export const ARTICLES_LOADING = 'articles/LOADING'
export const ARTICLES_LOADED = 'articles/LOADED'
export const ARTICLES_ERROR = 'articles/ERROR'

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
articles: {
  entities: {},
  error: false,
  loading: false,
}
})


// ---
// REDUCER
// ---

export default handleActions(
  {
    [ARTICLES_LOADING]: (state, action) => {
      console.log('reducer ARTICLES START LOADING', action)
      return Immutable.merge(state, { loading: true } )},
    [ARTICLES_ERROR]: (state, action) =>
      Immutable.merge(state, { text: action.payload }),
    [ARTICLES_LOADED]: (state, action) =>
      Immutable.merge(state, { loading: false }),
    [ARTICLES_START]: (state, action) =>
      Immutable.merge(state, { text: action.payload })
  },
  initialState
)
// import { createReducer } from 'redux-create-reducer'
// import * as at from 'src/icos/exampleConstants'

// const initialState = {
//   count: 0,
//   text: 'Hi!',
//   isTextDefault: true,
//   random: 0
// }

// export default createReducer(initialState, {
//   [at.INCREMENT]: state => ({ ...state, count: state.count + 1 }),

//   [at.CHANGE_TEXT]: (state, action) => ({
//     ...state,
//     text: action.payload.text
//   }),

//   [at.SET_RANDOM]: (state, action) => ({
//     ...state,
//     random: action.payload.random
//   }),

//   [at.SET_TEXT_CUSTOM]: state => ({ ...state, isTextDefault: false })
// })
