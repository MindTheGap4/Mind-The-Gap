import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoalsDialog from './GoalsDialog'
import TwoLevelPieChart from './D3/TwoLevelPieChart'
import {createYearObj, monthNumToName} from '../../helpers'
import Chart from './D3/BarChart'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, goal, points} = props
  const percentage = props.usersTotalEarned / props.usersTotalGoal * 100
  let data
  if (props.allPoints !== 'no user') {
    const sortedPoints = createYearObj(props.userDate, props.allPoints)
    const currentYear = new Date().getFullYear()
    const thisYearPoints = sortedPoints[currentYear]

    if (thisYearPoints) {
      data = thisYearPoints.map(month => {
        return {
          name: monthNumToName(month.month),
          goal: month.goal,
          earned: month.totalEarned
        }
      })
    }
  }
  return (
    <div style={{margin: '30px'}}>
      <h1
        style={{
          marginBottom: 40
        }}
      >
        {firstName.toUpperCase()} {lastName.toUpperCase()}, YOU'RE ON YOUR WAY
        TO MAKING THE WORLD A BETTER PLACE
      </h1>
      {goal === 0 ? (
        <div>
          <p>You haven't set up your goal yet!!</p>
          <GoalsDialog />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              flex: 2,
              marginBottom: 0,
              marginRight: '10px',
              width: '100%',
              height: '300px'
            }}
          >
            <TwoLevelPieChart />
          </div>
          <div
            style={{
              flex: 2,
              marginBottom: 0,
              marginLeft: '1px',
              width: '100%',
              height: '300px'
            }}
          >
            <Chart data={data} />{' '}
          </div>
        </div>
      )}
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
    user: state.user,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    goal: state.points.currentPoints.goal,
    points: state.points,
    usersTotalGoal: usersTotalGoal,
    usersTotalEarned: usersTotalEarned,
    allPoints: state.points.allPoints,
    userDate: new Date(state.user.createdAt)
  }
}

export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
