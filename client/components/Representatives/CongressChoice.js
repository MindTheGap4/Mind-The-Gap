import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import {Link, withRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'space-around'
  },
  card: {
    width: 325,
    height: 400
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
  input: {
    display: 'none'
  }
})

function SimpleCard(props) {
  const {classes} = props
  const selectedState = props.location.state.selectedState
  return (
    <div className={classes.root}>
      <h1>{selectedState.name}</h1>
      <Grid container spacing={40} className={classes.paper}>
        <Grid item xs={3} style={{maxWidth: '100%'}}>
          <Grid
            key={selectedState.name}
            container
            className={classes.demo}
            justifyContent="space-between"
            spacing={16}
          >
            <Link
              to={{
                pathname: `/representatives/${
                  selectedState.abbreviation
                }/house`,
                state: {selectedState: selectedState, congress: 'house'}
              }}
            >
              <Card className={classes.card}>
                <CardMedia
                  align="center"
                  className={classes.media}
                  image={
                    'https://c1.staticflickr.com/3/2537/5790403304_7e44291812_b_d.jpg'
                  }
                  title="House Picture"
                />
                <CardContent>
                  <Typography variant="headline" align="center" component="h1">
                    House of Representatives
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            key={selectedState.name}
            container
            className={classes.demo}
            justify="space-between"
            spacing={16}
          >
            <Link
              to={{
                pathname: `/representatives/${
                  selectedState.abbreviation
                }/senate`,
                state: {selectedState: selectedState, congress: 'senate'}
              }}
            >
              <Card className={classes.card}>
                <CardMedia
                  align="center"
                  className={classes.media}
                  image={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seal_of_the_United_States_Senate.svg/2000px-Seal_of_the_United_States_Senate.svg.png'
                  }
                  title="Senate Picture"
                />
                <CardContent>
                  <Typography variant="headline" align="center" component="h1">
                    Senate
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
