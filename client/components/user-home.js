import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, points} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <Link to="/account/activities">activities</Link>
      <br />
      <Link to="/account/points">points</Link>
      {/* <div>Points Earned: {points.currentPoints.totalEarned}</div>
      <div>Goal: {points.currentPoints.goal}</div>
      <div>
        Points till goal:{' '}
        {points.currentPoints.goal - points.currentPoints.totalEarned}
      </div> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
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
