import axios from 'axios'

const GET_ALL_USERS_POINTS = 'GET_ALL_USERS_POINTS'
const GET_CURRENT_POINTS = 'GET_CURRENT_POINTS'
const GET_ALL_POINTS = 'GET_ALL_POINTS'
const ADD_POINTS = 'ADD_POINTS'
const ADD_GOAL = 'ADD_GOAL'

const getAllUsersPoints = points => ({type: GET_ALL_USERS_POINTS, points})
const getCurrentPoints = points => ({type: GET_CURRENT_POINTS, points})

const getAllPoints = allPoints => ({type: GET_ALL_POINTS, allPoints})

const addPoints = currentPoints => ({type: ADD_POINTS, currentPoints})

const postGoal = goal => ({type: ADD_GOAL, goal})

const initialState = {
  currentPoints: {},
  allPoints: [],
  allUsersPoints: [],
  isFetching: true
}

export const fetchAllUsersPoints = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/points/allUsersPoints')
    dispatch(getAllUsersPoints(data))
  }
}

export const fetchCurrentPoints = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/points/currentPoints')
    dispatch(getCurrentPoints(data))
  }
}

export const fetchAllPoints = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/points/allPoints')
    dispatch(getAllPoints(data))
  }
}

export const updatePoints = input => {
  return async dispatch => {
    const {data} = await axios.put('/api/points/addPoints', input)
    dispatch(addPoints(data))
  }
}

export const addGoal = goal => {
  return async dispatch => {
    const {data} = await axios.put('/api/points/addGoal', {goal})
    dispatch(postGoal(data))
  }
}

export default function pointReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS_POINTS:
      return {...state, allUsersPoints: action.points}
    case GET_CURRENT_POINTS:
      return {...state, currentPoints: action.points, isFetching: false}
    case GET_ALL_POINTS:
      return {...state, allPoints: action.allPoints}
    case ADD_POINTS:
      const newAllPoints = state.allPoints.filter(pointRow => {
        return pointRow.id !== action.currentPoints.id
      })
      return {
        ...state,
        allPoints: [...newAllPoints, action.currentPoints],
        currentPoints: action.currentPoints
      }
    case ADD_GOAL:
      return {
        ...state,
        currentPoints: {goal: action.goal.goal}
      }
    default:
      return state
  }
}
