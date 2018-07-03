import React, {Component} from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts'
import {RenderActiveShape} from './RenderActiveShape'
import {connect} from 'react-redux'

const COLORS = ['#fafafa', '#ff1616', '#10f710' ]
class TwoLevelPieChart extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
    this.onPieEnter = this.onPieEnter.bind(this)
  }
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    const {activities} = this.props
    let repPoints = 0
    let donationPoints = 0
    console.log('activities', activities)
    const thisMonth =
      activities !== 'no user' &&
      activities.filter(
        activity =>
          new Date(activity.date).getMonth() === new Date().getMonth() &&
          new Date(activity.date).getFullYear() === new Date().getFullYear()
      )

    activities !== 'no user' &&
      thisMonth.forEach(activity => {
        if (activity.category === 'contact representative') {
          repPoints += activity.points
        }
        if (activity.category === 'donation') {
          donationPoints += activity.points
        }
      })
    const dataSent = [
      {
        name: 'Points until goal',
        value:
          this.props.currentPoints.goal - this.props.currentPoints.totalEarned
      },
      {name: 'Contacted Rep', value: repPoints},
      {name: 'Donation', value: donationPoints}
    ]


    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={RenderActiveShape}
            cx={300}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            onMouseEnter={this.onPieEnter}
            paddingAngle={5}
            data={dataSent}
            dataKey="value"
          >
            {dataSent.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

const mapState = state => {
  return {
    points: state.points,
    currentPoints: state.points.currentPoints,
    activities: state.activities.activityList
  }
}

export default connect(mapState)(TwoLevelPieChart)
