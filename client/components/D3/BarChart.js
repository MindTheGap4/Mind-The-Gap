import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

import React, {Component} from 'react'

class Chart extends Component {
  constructor() {
    super()
  }
  render() {
    let {data} = this.props

    return (
      <ResponsiveContainer>
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
          <Bar dataKey="goal" fill="#f4ce80" />
          <Bar dataKey="earned" fill="#a010e1" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
