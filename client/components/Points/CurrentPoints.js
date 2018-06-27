import React from 'react'
import {connect} from 'react-redux'
import TwoLevelPieChart from '../D3/TwoLevelPieChart'

export const CurrentPoints = props => {

  return (
    <div>
      <div>current points</div>
      <div>Points Earned: {props.currentPoints.totalEarned}</div>
      <div>Goal: {props.currentPoints.goal}</div>
      <div>
        Points till goal: {props.currentPoints.goal - props.currentPoints.totalEarned}
      </div>
      <TwoLevelPieChart />

    </div>
  )
}

const mapState = state => {
  return {
    currentPoints: state.points.currentPoints,
    activities: state.activities.activityList
  }
}

export default connect(mapState)(CurrentPoints)
