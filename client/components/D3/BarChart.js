import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

import React, {Component} from 'react'

class Chart extends Component {
  constructor() {
    super()
  }
  render() {
    let {data} = this.props

    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="goal" fill="#82ca9d" />
        <Bar dataKey="earned" fill="#8884d8" />
      </BarChart>
    )
  }
}

export default Chart
