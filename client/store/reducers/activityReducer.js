import axios from 'axios'

const GET_ACTIVITIES = 'GET_ACTIVITIES'

const getActivities = activities => ({type: GET_ACTIVITIES, activities})

const initialState = {
  activityList: [],
  isFetching: true
}

export const fetchActivities = () => {
  console.log('i am here')
  return async dispatch => {
    const {data} = await axios.get('/api/activity')
    dispatch(getActivities(data))
  }
}

export default function activityReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case GET_ACTIVITIES:
      return {activityList: action.activities, isFetching: false}
    default:
      return state
  }
}
