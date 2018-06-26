import React from 'react'
import {connect} from 'react-redux'
import TwoLevelPieChart from '../D3/TwoLevelPieChart'

export const CurrentPoints = props => {
  const {points, activities} = props
  let repPoints = 0
  let donationPoints = 0
  //const currentPoints = points && points.currentPoints.goal

  const thisMonth = activities && activities.filter(activity =>
  new Date(activity.date).getMonth() === new Date().getMonth() &&
  new Date(activity.date).getFullYear() === new Date().getFullYear())

  thisMonth.forEach(activity => {
    if(activity.category === 'contact representative') {
      repPoints += activity.points
    }
    if (activity.category === 'donation') {
      donationPoints += activity.points
    }
    console.log("REP POINTS", repPoints)
    console.log("DONATION POINTS", donationPoints)
  })

const data=[{name: 'Contacted Rep', value: repPoints}, {name: 'Donation', value: donationPoints}, {name: 'Points Left', value: props.currentPoints.goal - props.currentPoints.totalEarned}]

  return (
    <div>
      <div>current points</div>
      <div>Points Earned: {props.currentPoints.totalEarned}</div>
      <div>Goal: {props.currentPoints.goal}</div>
      <div>
        Points till goal: {props.currentPoints.goal - props.currentPoints.totalEarned}
      </div>
      <TwoLevelPieChart data={data} />

    </div>
  )
}

const mapState = state => {
  return {
    points: state.points,
    currentPoints: state.points.currentPoints,
    activities: state.activities.activityList
  }
}

export default connect(mapState)(CurrentPoints)
