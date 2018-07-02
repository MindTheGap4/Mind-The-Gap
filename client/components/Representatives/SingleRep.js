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

import Icon from '@material-ui/core/Icon'

import {Link, withRouter} from 'react-router-dom'
import {addActivity} from '../../store/reducers/activityReducer'
import {connect} from 'react-redux'
import {updatePoints} from '../../store/reducers/pointsReducer'

const styles = {
  card: {
    maxWidth: 445
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '0 auto',
    backgroundSize: 'contain'
  }
}

const SingleRep = props => {
  const {classes} = props

  const rep = props.location.state.selectedRep
  console.log(rep)

  const activity = {
    name: rep.first_name + ' ' + rep.last_name,
    location: rep.roles[0].state,
    link: rep.url,
    type: 'representatives'
  }

  const buttonSubmit = () => props.addActivity(activity)
  return (
    <div className="centering-card">
      {/* <div>
        Name: {rep.first_name} {rep.last_name}
      </div>
      <div>Phone: {rep.roles[0].phone}</div>
      <div>Link: {rep.url}</div>
      <button type="button" onClick={buttonSubmit}>
        I CONTACTED THIS REP TODAY, COLLECT MY POINTS
      </button> */}
      <Card className={classes.card}>
        {rep.current_party === 'R' ? (
          <CardMedia
            className={classes.media}
            image="/Republicanlogo.svg.png"
            title="Republican Logo"
          />
        ) : (
          <CardMedia
            className={classes.media}
            image="/DemocraticLogo.png"
            title="Democratic Logo"
          />
        )}
        {/* <CardMedia
          className={classes.media}
          image="/DemocraticLogo.png"
          title="Democratic Logo"
        /> */}
        <CardContent>
          {/* <Typography gutterBottom variant="headline" component="h2">
            Name: {rep.first_name} {rep.last_name}
          </Typography> */}
          {rep.roles[0].short_title === 'Sen.' ? (
            //   <Typography component="p">
            //   Lizards are a widespread group of squamate reptiles, with over 6,000
            //   species, ranging across all continents except Antarctica
            // </Typography>
            <div>
              <Typography gutterBottom variant="headline" component="h2">
                Sen. {rep.first_name} {rep.last_name}
              </Typography>
              <Typography component="p">
                Senator for {rep.roles[0].state}
              </Typography>
            </div>
          ) : (
            <div>
              <Typography gutterBottom variant="headline" component="h2">
                Rep. {rep.first_name} {rep.last_name}
              </Typography>
              <Typography component="p">
                Representative for District {rep.roles[0].district},{' '}
                {rep.roles[0].state}
              </Typography>
            </div>
          )}
        </CardContent>
        <hr className="divider" />
        <CardActions>
          <Button className="social-icons" size="small" color="primary">
            <Icon className={classes.icon}>open_in_new</Icon>
            <a href={rep.url} target="_blank">
              website
            </a>
          </Button>
          <Button className="social-icons" size="small" color="primary">
            <Icon className={classes.icon}>phone</Icon>
            <a href={rep.url} target="_blank">
              {rep.roles[0].phone}
            </a>
          </Button>
        </CardActions>
        <hr className="divider" />

        <CardActions>
          <Button className="social-icons" size="small" color="primary">
            <a href={rep.roles[0].contact_form} target="_blank">
              <Icon className={classes.icon}>email</Icon>
            </a>
          </Button>
          <Button className="social-icons" size="small" color="primary">
            <a
              href={`https://www.facebook.com/${rep.facebook_account}`}
              target="_blank"
            >
              <i className=" fab fa-facebook fa-lg" />
            </a>
          </Button>
          <Button className="social-icons" size="small" color="primary">
            <a
              href={`https://www.twitter.com/${rep.twitter_account}`}
              target="_blank"
            >
              <i className=" fab fa-twitter fa-lg" />
            </a>
          </Button>
        </CardActions>
        <CardActions>
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
        </CardActions>
      </Card>
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

export default withStyles(styles)(connect(null, mapDispatchToProps)(SingleRep))
