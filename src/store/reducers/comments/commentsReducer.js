import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'
import axios from 'axios'
import {arrayToObject} from '../articles/articlesReducer'


// ---
// CONSTANTS
// ---

export const COMMENTS_LOADING = 'comments/LOADING'
export const COMMENTS_LOADED = 'comments/LOADED'
export const COMMENTS_ERROR = 'comments/ERROR'

const url = 'https://5b1eb7944d4fc00014b07e1e.mockapi.io/kantor_comments'

// ---
// ACTION CREATORS
// ---

export const comments_loading = createAction(COMMENTS_LOADING)
export const comments_loaded = createAction(COMMENTS_LOADED)
export const comments_error = createAction(COMMENTS_ERROR)


export const comments_thunk = () => {
  return (dispatch, getState) => {
    if(getState().comments.loaded) {
      //console.log('comments are already loaded')
      return 
    }
    dispatch(comments_loading())

    axios
    .get(url)
    .then((r)=> {
      const CommentsArray = arrayToObject(r.data)
      dispatch(comments_loaded(CommentsArray))
    })
    .catch((e)=> {
      console.log('Error is occured', e)
      dispatch(comments_error(e))
    })
   


  }
}

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
    entities: {},
    error: false,
    loading: false,
    loaded: false,
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [COMMENTS_LOADING]: (state, action) =>
      Immutable.merge(state, { loading: true }),
    [COMMENTS_LOADED]: (state, action) =>
      Immutable.merge(state, { entities: { ...state.entities, ...action.payload}, loading: false, loaded: true }),
    [COMMENTS_ERROR]: (state, action) =>
      Immutable.merge(state, { error: true }),   
      
  },
  initialState
)
