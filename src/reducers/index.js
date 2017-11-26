import { combineReducers } from 'redux'
import searchPageReducer from './searchPageReducer'
import moviePageReducer from './moviePageReducer'

const rootReducer = combineReducers({
  search: searchPageReducer,
  film: moviePageReducer,
})

export default rootReducer
