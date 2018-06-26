import React, {Component} from 'react';
import { PieChart, Pie, Sector} from 'recharts';
import {RenderActiveShape} from './RenderActiveShape';

// const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
// {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

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
    return(
      <PieChart width={800} height={400} >
      <Pie activeIndex={this.state.activeIndex} activeShape={RenderActiveShape} data={this.props.data} cx={300} cy={200} innerRadius={60} outerRadius={80} fill='#8884d8' onMouseEnter={this.onPieEnter}/>
      </PieChart>
    )
  }
}

export default TwoLevelPieChart
