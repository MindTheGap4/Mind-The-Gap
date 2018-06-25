import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Piechart from './Points/PieChart'
import Chart from './D3/BarChart'
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
      <div>
        <Piechart
          x={100}
          y={100}
          outerRadius={200} /* controls how big it renders */
          innerRadius={100}
          data={[
            {value: 92 - 34, label: 'Code lines'},
            {value: 34, label: 'Empty lines'}
          ]}
        />
      </div>
      <div>
        <Chart
          data={[
            {name: 'Page A', uv: 40, pv: 24, amt: 24},
            {name: 'Page B', uv: 30, pv: 13, amt: 22},
            {name: 'Page C', uv: 20, pv: 98, amt: 2290},
            {name: 'Page D', uv: 27, pv: 39, amt: 20}
          ]}
        />
      </div>
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
