import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const CurrentPoints = props => {
  const {currentPoints} = props
  return (
    <div>
      <div>current points</div>
      <div>Points Earned: {currentPoints.totalEarned}</div>
      <div>Goal: {currentPoints.goal}</div>
      <div>
        Points till goal: {currentPoints.goal - currentPoints.totalEarned}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    currentPoints: state.points.currentPoints
  }
}

export default connect(mapState)(CurrentPoints)
