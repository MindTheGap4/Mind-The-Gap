import axios from 'axios'

const GET_CURRENT_POINTS = 'GET_CURRENT_POINTS'

const getCurrentPoints = points => ({type: GET_CURRENT_POINTS, points})

const initialState = {
  currentPoints: {},
  pastPoints: [],
  isFetching: true
}

export const fetchCurrentPoints = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/points/currentPoints')
    dispatch(getCurrentPoints(data))
  }
}

export default function pointReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_POINTS:
      return {currentPoints: action.points, isFetching: false, ...state}
    default:
      return state
  }
}
