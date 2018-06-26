import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

import {Link, withRouter} from 'react-router-dom'
import {addActivity} from '../../store/reducers/activityReducer'
import {connect} from 'react-redux'
import {updatePoints} from '../../store/reducers/pointsReducer'
// import usSenate from 'civil-services-us-senate'
// console.log(usSenate)

const styles = {
  card: {
    maxWidth: 445
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

const SponsorCard = props => {
  const {classes, sponsor, handleClick} = props
  console.log('')
  return (
    <div className="centering-card">
      {/* <button
        onClick={() => {
          handleClick(selectedSponsor)
        }}
      > */}
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={sponsor.imageUrl}
            title="Sponsor Card"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {sponsor.name}
            </Typography>
            {/* <Typography component="p">{sponsor.description}</Typography> */}
          </CardContent>
          <hr className="divider" />
          <CardActions>
            <Button className="social-icons" size="small" color="primary">
              <Icon className={classes.icon}>open_in_new</Icon>
              <a href={sponsor.url} target="_blank">
                website
              </a>
            </Button>
            {/* <Button className="social-icons" size="small" color="primary">
            <Icon className={classes.icon}>phone</Icon>
            <a href={rep.url} target="_blank">
              773.475.3283
            </a>
          </Button> */}
          </CardActions>
          <hr className="divider" />

          <CardActions>
            <Button className="social-icons" size="small" color="primary">
              <a href={sponsor.instagramUrl} target="_blank">
                <i className="fab fa-instagram fa-lg" />
              </a>
            </Button>
            <Button className="social-icons" size="small" color="primary">
              <a href={sponsor.facebookUrl} target="_blank">
                <i className=" fab fa-facebook fa-lg" />
              </a>
            </Button>
            <Button className="social-icons" size="small" color="primary">
              <a href={sponsor.twitterUrl} target="_blank">
                <i className=" fab fa-twitter fa-lg" />
              </a>
            </Button>
          </CardActions>
          {/* <CardActions>
              <Button
                className="social-icons collect-points"
                size="small"
                color="primary"
                onClick={buttonSubmit}
              >
                <span className="collect-points">
                  {' '}
                  I CONTACTED THIS REP, COLLECT MY POINTS
                </span>

                <Icon className={classes.icon}>control_point</Icon>
              </Button>
            </CardActions> */}
        </Card>
      </Grid>
      {/* </button> */}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addActivity: activity => {
      dispatch(addActivity(activity))
      dispatch(updatePoints({points: 5}))
    }
  }
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(SponsorCard)
)
