import React, {Component} from 'react';
import { PieChart, Pie} from 'recharts';
import {RenderActiveShape} from './RenderActiveShape';
import {connect} from 'react-redux';

class TwoLevelPieChart extends Component {
  constructor(){
    super()
    this.state = {
      activeIndex: 0
    };
    this.onPieEnter = this.onPieEnter.bind(this)
  };
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render(){
  const { activities} = this.props
  let repPoints = 0
  let donationPoints = 0

  const thisMonth = activities && activities.filter(activity =>
  new Date(activity.date).getMonth() === new Date().getMonth() &&
  new Date(activity.date).getFullYear() === new Date().getFullYear())

  thisMonth.forEach(activity => {
    if(activity.category === 'contact representative') {
      repPoints += activity.points
    }
    if (activity.category === 'donation') {
      donationPoints += activity.points
    }
  })

const dataSent=[{name: 'Contacted Rep', value: repPoints}, {name: 'Donation', value: donationPoints}, {name: 'Points until goal', value: this.props.currentPoints.goal - this.props.currentPoints.totalEarned}]
    return(
      <PieChart width={800} height={400} >
      <Pie activeIndex={this.state.activeIndex} activeShape={RenderActiveShape} cx={300} cy={200} innerRadius={60} outerRadius={80} fill='#8884d8' onMouseEnter={this.onPieEnter} data={dataSent}/>
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
