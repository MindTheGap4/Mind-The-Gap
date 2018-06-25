import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
      {/* <Link to="/account/activities">account</Link> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    points: state.points,
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
