import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {connect} from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 5,
  },
  bar: {
    flex: 1,
    marginBottom: 0
  }
};



function BottomNav(props) {
  let percentage = 0;
  if (props.usersTotalEarned > 0 && props.usersTotalGoal) {
    percentage = Math.floor(
      props.usersTotalEarned / props.usersTotalGoal * 100
    )
  }
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar
        color="default"
        style={{
          position: 'fixed',
          top: 'unset',
          bottom: 0,
          backgroundColor: '#d1d1d1'
        }}
      >
        <Toolbar>
          {/* <Typography variant="title" color="inherit">
            All User Progress
          </Typography> */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                fontWeight: '900',
                marginRight: '12px'
              }}
            >
              All User Progress: {percentage}%
            </div>
            {/* <ProgressBar
              active
              now={percentage}
              label={`${percentage}%`}
              style={{
                flex: 1,
                marginBottom: 0
              }}
            /> */}
            <LinearProgress variant="determinate" value={percentage} className={classes.bar}/>


            <div
              style={{
                marginLeft: '12px'
              }}
            >
              Points Earned: {props.usersTotalEarned}
              <br />Total Goal: {props.usersTotalGoal}
            </div>
            {/* <div>Total Points Earned: {props.usersTotalEarned}</div>
            <div>Total Goal: {props.usersTotalGoal}</div> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapState = state => {
  let usersTotalGoal = 0
  let usersTotalEarned = 0
  state.points.allUsersPoints.length &&
    state.points.allUsersPoints.forEach(point => {
      usersTotalGoal += point.goal
      usersTotalEarned += point.totalEarned
    })
  console.log('usersTotalGoal', usersTotalGoal)
  console.log('usersTotalEarned ', usersTotalEarned)
  return {
    usersTotalGoal: usersTotalGoal,
    usersTotalEarned: usersTotalEarned
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapState, null)(BottomNav))
