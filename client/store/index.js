import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import activityReducer from './reducers/activityReducer'
import pointsReducer from './reducers/pointsReducer'

const reducer = combineReducers({
  user,
  activities: activityReducer,
  points: pointsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './reducers/activityReducer'
