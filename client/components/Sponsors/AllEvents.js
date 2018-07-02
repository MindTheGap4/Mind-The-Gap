import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import EventCard from './EventCard'
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
    const sponsors = await axios.get('/api/sponsors')
    this.setState({
      allEvents: data,
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
