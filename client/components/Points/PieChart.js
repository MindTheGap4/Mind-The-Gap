import React, {Component} from 'react'
import LabeledArc from './LabeledArc'
import * as d3 from 'd3'

class Piechart extends Component {
  constructor() {
    super()
    this.pie = d3.pie().value(d => d.value)
    this.colors = d3.scaleOrdinal(d3.schemeCategory10)
  }

  arcGenerator(d, i) {
    return (
      <LabeledArc
        key={`arc-${i}`}
        data={d}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        color={this.colors(i)}
      />
    )
  }

  render() {
    let pie = this.pie(this.props.data),
      transform = `translate(50%, 50%)`

    return (
      <svg
        style={{
          width: '400px',
          height: '400px',
          overflow: 'initial'
        }}
      >
        <g
          style={{
            transform
          }}
        >
          {pie.map((d, i) => this.arcGenerator(d, i))}
        </g>
      </svg>
    )
  }
}

export default Piechart
