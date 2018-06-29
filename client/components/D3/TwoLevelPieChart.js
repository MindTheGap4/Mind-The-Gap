import React, {Component} from 'react'
import {PieChart, Pie, Cell} from 'recharts'
import {RenderActiveShape} from './RenderActiveShape'
import {connect} from 'react-redux'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
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
      {name: 'Contacted Rep', value: repPoints},
      {name: 'Donation', value: donationPoints},
      {
        name: 'Points until goal',
        value:
          this.props.currentPoints.goal - this.props.currentPoints.totalEarned
      }
    ]
    let goal = this.props.currentPoints.goal
    console.log('GOAL', goal)
    return (
      <PieChart width={800} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={RenderActiveShape}
          cx={300}
          cy={200}
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
