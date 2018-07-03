import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SimpleSlider from './extraLibraries/Carousel'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
/**
 * COMPONENT
 */
export const Home = props => {
  const {goal, points} = props
  console.log('GOAL', goal)
  console.log('POINTS', points)

  return (
    <div>
      <div>
        {/* <span className="quote">"By Doing Good, We Do Well"</span> */}
        <div className="image-container">
          <div className="homeDescription">
            <h3>MIND THE GAP</h3>
            <p>
              With all the BAD in the world, we are here to help you do more
              GOOD. If we all contribute a LITTLE more, together we will make a
              BIG difference
            </p>
          </div>
          <img src="circle-home.png" className="cover-img" />
        </div>
      </div>
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
