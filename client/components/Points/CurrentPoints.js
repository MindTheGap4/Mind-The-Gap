import React from 'react'
import {connect} from 'react-redux'
import TwoLevelPieChart from '../D3/TwoLevelPieChart'

export const CurrentPoints = props => {
  console.log('CURRENT POINTs', props.currentPoints)
  return (
    <div>
      <div>current points</div>
      <div>Points Earned: {props.currentPoints.totalEarned}</div>
      <div>Goal: {props.currentPoints.goal}</div>
      <div>
        Points till goal: {

          props.currentPoints.goal - props.currentPoints.totalEarned >0 ?
            props.currentPoints.goal - props.currentPoints.totalEarned
            : 'You met the goal for this month, congrats!'

        }
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
