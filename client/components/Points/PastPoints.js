import React from 'react'
import {connect} from 'react-redux'
import {createYearObj, monthNumToName} from '../../../helpers'
import Chart from '../D3/BarChart'

export const PastPoints = props => {
  const sortedPoints = createYearObj(props.userDate, props.allPoints)
  const currentYear = new Date().getFullYear()
  const thisYearPoints = sortedPoints[currentYear]

  let data
  if (thisYearPoints) {
    data = thisYearPoints.map(month => {
      return {
        name: monthNumToName(month.month),
        goal: month.goal,
        earned: month.totalEarned
      }
    })
  }
  console.log('DATA', data)
  return (
    <div>
      <div>pastpoints</div>
      {/* <div>
        {Object.keys(sortedPoints).map(key => {
          return (
            <div>
              {key}:
              {sortedPoints[key].map(monthObj => {
                return (
                  <div>
                    {monthNumToName(monthObj.month)} points earned:{' '}
                    {monthObj.totalEarned} goal:{monthObj.goal}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div> */}
      <div>
        {Object.keys(sortedPoints)
          .reverse()
          .map(key => {
            let data = sortedPoints[key].map(month => {
              return {
                name: monthNumToName(month.month),
                goal: month.goal,
                earned: month.totalEarned
              }
            })
            return (
              <div>
                {key}
                <Chart data={data} />{' '}
              </div>
            )
          })}
      </div>
      {/* <div>{thisYearPoints && <Chart data={data} />}</div> */}
    </div>
  )
}

const mapState = state => {
  return {
    allPoints: state.points.allPoints,
    userDate: new Date(state.user.createdAt)
    // monthNumToName: monthNum => {
    //   var months = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    //   ]
    //   return months[monthNum]
    // }
  }
}

export default connect(mapState)(PastPoints)
