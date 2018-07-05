import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const PastActivities = props => {
  const {classes, contactRep, donations} = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>List of Good You've Done</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              Reps You've Contacted
            </Grid>
            {contactRep.map(item => {
              return (
                <div>
                  <Grid item xs={12} className={classes.paper}>
                    {item}
                  </Grid>
                </div>
              )
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Orgs You've Donated To
            {donations.map(item => {
              return (
                <Grid item xs={12} className={classes.paper}>
                  {item}
                </Grid>
              )
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
  // const activities = props.activityList
  // return (
  //   <div>
  //     {activities.map(activity => {
  //       return <div key={activity.id}>{activity.name}</div>
  //     })}
  //   </div>
  // )
}

const mapState = state => {
  let repNames = []
  let orgNames = []
  state.activities.activityList.map(activity => {
    if (
      !repNames.includes(activity.name) &&
      activity.status === 'past' &&
      activity.category === 'contact representative'
    ) {
      repNames.push(activity.name)
    } else if (
      !orgNames.includes(activity.name) &&
      activity.status === 'past' &&
      activity.category === 'donation'
    ) {
      orgNames.push(activity.name)
    }
  })
  return {contactRep: repNames, donations: orgNames}
}

PastActivities.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapState)(PastActivities))
