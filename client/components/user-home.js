import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoalsDialog from './GoalsDialog'
import {ProgressBar} from 'react-bootstrap'
import TwoLevelPieChart from './D3/TwoLevelPieChart'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, goal, points} = props
  const percentage = props.usersTotalEarned / props.usersTotalGoal * 100
  console.log('GOAL', goal)
  console.log('POINTS', points)

  return (
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
      {goal === 0 ? (
        <div>
          <p>You haven't set up your goal yet!!</p>
          <GoalsDialog />
        </div>
      ) : (
        <TwoLevelPieChart />
      )}
      <div>
        All User Progress
        <ProgressBar active now={percentage} label={`${percentage}%`} />
        <div>Total Points Earned: {props.usersTotalEarned}</div>
        <div>Total Goal: {props.usersTotalGoal}</div>
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  let usersTotalGoal = 0
  let usersTotalEarned = 0
  state.points.allUsersPoints.length &&
    state.points.allUsersPoints.forEach(point => {
      usersTotalGoal += point.goal
      usersTotalEarned += point.totalEarned
    })
  console.log('usersTotalGoal', usersTotalGoal)
  console.log('usersTotalEarned ', usersTotalEarned)
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    goal: state.points.currentPoints.goal,
    points: state.points,
    usersTotalGoal: usersTotalGoal,
    usersTotalEarned: usersTotalEarned
  }
}

export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
