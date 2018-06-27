import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TwoLevelPieChart from './D3/TwoLevelPieChart';
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName} = props

  return (
    <div>
      <h3>
        Welcome, {firstName} {lastName}
      </h3>
     <TwoLevelPieChart />
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
  }
}

export default connect(mapState)(UserHome)
/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
