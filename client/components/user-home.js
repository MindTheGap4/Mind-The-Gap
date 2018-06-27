import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoalsDialog from './GoalsDialog'

import TwoLevelPieChart from './D3/TwoLevelPieChart';
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, goal, points} = props
  console.log("GOAL", goal)
  console.log("POINTS", points)


  return (
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
      {
        goal === 0 ?
          <div>
            <p>You haven't set up your goal yet!!</p>
            <GoalsDialog />
            </div>
            : <TwoLevelPieChart />

      }

    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    goal: state.points.currentPoints.goal,
    points: state.points
  }
}

export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
