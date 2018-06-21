import React from 'react'
import {connect} from 'react-redux'

const PastActivities = props => {
  const activities = props.activityList
  return (
    <div>
      {activities.map(activity => {
        return <div key={activity.id}>{activity.name}</div>
      })}
    </div>
  )
}

const mapState = state => {
  const past = state.activities.activityList.filter(activity => {
    return activity.status === 'past'
  })
  return {activityList: past}
}

export default connect(mapState)(PastActivities)
