import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SimpleSlider from './extraLibraries/Carousel'

/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName, lastName, goal, points} = props
  console.log('GOAL', goal)
  console.log('POINTS', points)

  return (
    <div>
      <h3>This is Mind Matters!</h3>
      <SimpleSlider />
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

export default connect(mapState)(Home)
/**
 * PROP TYPES
 */
