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
import EventCard from './EventCard'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import {connect} from 'react-redux'
import AllSponsors from './AllSponsors'

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

class AllEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEvents: [],
      allSponsors: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get(`/api/events`)
    const userEvents = await axios.get(`/api/userEvents`)
    console.log('user events', userEvents.data)
    const userEventIds = userEvents.data.map(event => {
      return event.event.id
    })
    const toShow = data.filter(event => {
      return !userEventIds.includes(event.id)
    })
    const sponsors = await axios.get('/api/sponsors')
    this.setState({
      allEvents: toShow,
      allSponsors: sponsors.data
    })
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <h1>Available Events</h1>
        <Grid className={classes.paper} container spacing={40}>
          {this.state.allEvents.map(event => {
            const selectedSponsor = this.state.allSponsors.filter(
              sponsor => sponsor.id === event.sponsorId
            )
            return (
              <EventCard
                key={event.id}
                event={event}
                selectedSponsor={selectedSponsor[0]}
              />
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(AllEvents)
