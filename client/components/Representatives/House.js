import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import RepCard from './RepCard'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'space-around'
  }
})
class House extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allReps: [],
      selectedRep: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/representatives/${this.props.location.state.congress}/${
        this.props.location.state.selectedState.abbreviation
      }`
    )
    this.setState({
      allReps: data.results
    })
    console.log('allreps', this.state.allReps)
  }
  async handleClick(evt) {
    const {data} = await axios.get(`/api/representatives/singleRep/${evt.id}`)
    this.setState(
      {
        selectedRep: data.results[0]
      },
      () => {
        this.props.history.push({
          pathname: `/representatives/singleRep/${
            this.state.selectedRep.member_id
          }`,
          state: {selectedRep: this.state.selectedRep}
        })
      }
    )
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Grid className={classes.paper} container spacing={40}>
          {this.state.allReps.map(rep => {
            return (
              <RepCard key={rep.id} rep={rep} handleClick={this.handleClick} />
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(House)
