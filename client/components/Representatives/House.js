import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import {Link, withRouter} from 'react-router-dom'
import RepCard from './RepCard'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
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
