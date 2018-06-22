import React, {Component} from 'react'
import {connect} from 'react-redux'
import PastActivities from './PastActivities'
import UpcomingActivities from './UpcomingActivities'
import {fetchActivities} from '../../store/reducers/activityReducer'

class ActivityList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Upcoming:
        <UpcomingActivities />
        <br />
        Past:
        <PastActivities />
      </div>
    )
  }
}

export default connect(null, null)(ActivityList)
