import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import EventCard from './EventCard'

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

const SingleSponsor = props => {
  console.log('props', props)
  const {selectedSponsor, events} = props.location.state
  const {classes} = props
  return (
    <div className="single-sponsor">
      <h1>{selectedSponsor.name}</h1>
      <h5 className="sponsor-desc">{selectedSponsor.description}</h5>
      <h2 className="upcoming-events">Upcoming Events</h2>
      <div className={classes.root}>
        <Grid className={classes.paper} container spacing={40}>
          {events.map(event => {
            return (
              <EventCard
                key={event.id}
                event={event}
                selectedSponsor={selectedSponsor}
              />
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

SingleSponsor.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SingleSponsor)
