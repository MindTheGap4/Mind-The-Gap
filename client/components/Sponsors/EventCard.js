import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import {updatePoints} from '../../store/user'
import {connect} from 'react-redux'
import axios from 'axios'

const styles = theme => ({
  card: {
    minWidth: 325
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    paddingTop: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const EventCard = props => {
  const {event, classes, selectedSponsor} = props
  async function handleClick(evt) {
    props.updatePoints(+event.pointCost)
    const objToSend = {eventId: evt.id}
    console.log('objtosent', objToSend)
    const postedEvent = await axios.post('/api/userEvents', objToSend)
  }
  console.log('props', props)
  return (
    <Grid key={event.url} item xs={6}>
      <Grid
        container
        className={classes.demo}
        justify="center"
        spacing={24}
        style={{padding: 20}}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" align="center" component="h1">
              {event.name}
            </Typography>
            <CardMedia
              className={classes.media}
              image={selectedSponsor.imageUrl}
              title="Sponsor Card"
            />
            <Typography variant="subheading" align="center">
              {event.description}
            </Typography>
            {event.date && (
              <Typography variant="subheading" align="center">
                Date: {new Date(event.date).toDateString()}
              </Typography>
            )}
            {event.date && (
              <Typography variant="subheading" align="center">
                Time: {new Date(event.date).toLocaleTimeString()}
              </Typography>
            )}
            <Typography variant="subheading" align="center">
              {event.location}
            </Typography>
            <Typography variant="body2" align="center">
              Point cost: {event.pointCost}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type="submit"
              justify="center"
              disabled={event.pointCost > props.totalPoints ? true : false}
              onClick={() => handleClick(event)}
            >
              {event.pointCost < props.totalPoints
                ? 'CLICK TO TRADE POINTS TO ATTEND'
                : 'YOU DONT HAVE ENOUGH POINTS'}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => {
  let sum = 0
  state.points.allPoints.forEach(point => {
    sum += point.totalEarned
  })
  return {
    totalPoints: sum - state.user.pointsSpent
  }
}

const mapDispatch = dispatch => {
  return {
    updatePoints: points => dispatch(updatePoints(points))
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(EventCard))
