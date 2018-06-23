import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const PastPoints = props => {
  function createYearObj() {
    const userStartYear = props.userDate.getFullYear()
    const userStartMonth = props.userDate.getMonth()
    console.log('userstartmonth', userStartMonth)
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const yearObj = {}
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    function monthNumToName(monthnum) {
      return months[monthnum] || ''
    }
    for (let year = userStartYear; year <= currentYear; year++) {
      let loopStartMonth
      let loopEndMonth
      yearObj[year] = []
      if (year === userStartYear) {
        loopStartMonth = userStartMonth
      } else {
        loopStartMonth = 0
      }
      if (year === currentYear) {
        loopEndMonth = currentMonth
      } else {
        loopEndMonth = 11
      }
      for (let month = loopStartMonth; month <= loopEndMonth; month++) {
        // const monthName = monthNumToName(month)
        yearObj[year][month] = {month: true}
      }
    }
    props.allPoints.forEach(point => {
      // const monthName = monthNumToName(point.month)
      yearObj[point.year][point.month] = point
    })
    console.log(yearObj)
    return yearObj
  }
  const sortedPoints = createYearObj()
  return (
    <div>
      <div>pastpoints</div>
      <div>
        {Object.keys(sortedPoints).map(key => {
          return (
            <div>
              {key}:
              {sortedPoints[key].map(monthObj => {
                return (
                  <div>
                    {props.monthNumToName(monthObj.month)} points earned:{' '}
                    {monthObj.totalEarned} goal:{monthObj.goal}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    allPoints: state.points.allPoints,
    userDate: new Date(state.user.createdAt),
    monthNumToName: monthNum => {
      var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return months[monthNum]
    }
  }
}

export default connect(mapState)(PastPoints)
