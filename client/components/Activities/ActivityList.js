import React, {Component} from 'react'
import {connect} from 'react-redux'
import PastActivities from './PastActivities'
import UpcomingActivities from './UpcomingActivities'
import {fetchActivities} from '../../store/reducers/activityReducer'

class ActivityList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const fetchActivities = this.props.fetchActivities
    fetchActivities()
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

const mapDispatch = dispatch => {
  return {
    fetchActivities: () => dispatch(fetchActivities())
  }
}

export default connect(null, mapDispatch)(ActivityList)
