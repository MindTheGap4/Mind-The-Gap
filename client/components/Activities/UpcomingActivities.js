import React from 'react'
import {connect} from 'react-redux'

const UpcomingActivities = props => {
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
  const upcoming = state.activities.activityList.filter(activity => {
    return activity.status === 'upcoming'
  })
  return {activityList: upcoming}
}

export default connect(mapState)(UpcomingActivities)
