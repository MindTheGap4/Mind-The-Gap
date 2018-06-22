import axios from 'axios'

const GET_ACTIVITIES = 'GET_ACTIVITIES'
const POST_ACTIVITY = 'POST_ACTIVITY'

const getActivities = activities => ({type: GET_ACTIVITIES, activities})
const postActivity = activity => ({type: POST_ACTIVITY, activity})

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

export const addActivity = activity => {
  console.log('hit add activity')
  return async dispatch => {
    const {data} = await axios.post(`/api/activity/${activity.type}`, activity)
    console.log('data', data)
    dispatch(postActivity(data))
  }
}

export default function activityReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case GET_ACTIVITIES:
      return {activityList: action.activities, isFetching: false}
    case POST_ACTIVITY:
      return {activityList: [...state.activityList, action.activity]}
    default:
      return state
  }
}
