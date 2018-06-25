import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Piechart from './Points/PieChart'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, activities, points} = props
  let repPoints = 0
  let donationPoints = 0
  const currentPoints = points && points.currentPoints.goal
  const thisMonth =
    activities &&
    activities.filter(
      activity =>
        new Date(activity.date).getMonth() === new Date().getMonth() &&
        new Date(activity.date).getFullYear() === new Date().getFullYear()
    )
  thisMonth.forEach(activity => {
    if (activity.category === 'contact representative') {
      repPoints += activity.points
    }
    if (activity.category === 'donation') {
      donationPoints += activity.points
    }
  })

  return (
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
      <div>
        <Piechart
          x={100}
          y={100}
          outerRadius={200} /* controls how big it renders */
          innerRadius={100}
          data={[
            {value: repPoints, label: 'Contacted Rep'},
            {value: donationPoints, label: 'Donation'},
            {value: currentPoints - donationPoints - repPoints, label: 'To Go'}
          ]}
        />
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    points: state.points,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    activities: state.activities.activityList
  }
}

export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
