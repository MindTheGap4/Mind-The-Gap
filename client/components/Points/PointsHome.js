import React from 'react'
import {connect} from 'react-redux'
import CurrentPoints from './CurrentPoints'
import PastPoints from './PastPoints'

export const PointsHome = props => {
  return (
    <div>
      <h1>Points Home</h1>
      <div>
        <CurrentPoints />
      </div>
      <br />
      <div>
        <PastPoints />
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    currentPoints: state.points
  }
}

export default connect(mapState)(PointsHome)
