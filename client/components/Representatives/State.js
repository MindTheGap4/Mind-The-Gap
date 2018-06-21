import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import StateCard from './StateCard'

class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateList: [],
      selectedState: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/states')
    this.setState({
      stateList: data
    })
  }
  handleClick(evt) {
    this.setState({
      selectedState: evt.target
    })
    this.props.history.push(`/representatives/${this.state.abbreviation}`)
  }
  render() {
    console.log('state', this.state)

    return (
      <div>
        {this.state.stateList.map(state => {
          return <StateCard key={state.id} state={state} />
        })}
      </div>
    )
  }
}

export default State
