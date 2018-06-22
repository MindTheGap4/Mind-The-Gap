import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import StateCard from './StateCard'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})
class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateList: [],
      selectedState: {}
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
    this.setState(
      {
        selectedState: evt
      },
      () => {
        this.props.history.push({
          pathname: `/representatives/${this.state.selectedState.abbreviation}`,
          state: {selectedState: this.state.selectedState}
        })
      }
    )
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <h1>States</h1>
        <Grid container className={classes.root} spacing={16} justify="center">
          {this.state.stateList.map(state => {
            return (
              <Grid item xs={3}>
                <Grid
                  container
                  className={classes.demo}
                  align="center"
                  spacing={16}
                >
                  <StateCard
                    key={state.id}
                    state={state}
                    handleClick={this.handleClick}
                  />
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(State)
