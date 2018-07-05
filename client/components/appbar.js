import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CircularProgressbar from 'react-circular-progressbar'
import {logout} from '../store'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'

const styles = {
  root: {
    flexGrow: 2
  },
  navTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuItem : {
    fontSize: 16
  }
}

class ButtonAppBar extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    const {classes, handleClick, isLoggedIn, points} = this.props
    const {goal} = points.currentPoints
    let pointsPercentage = 0
    if (goal) {
      if (points.currentPoints.totalEarned > 0 || goal > 0) {
        pointsPercentage += Math.round(
          points.currentPoints.totalEarned / points.currentPoints.goal * 100
        )
      }
    }

    return (
      // <MuiThemeProvider >
      <div className={classes.root}>
        <AppBar
          style={{
            position: 'fixed',
            top: 0,
            bottom: 'unset'
          }}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              label="Open Drawer"
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </IconButton>
            {isLoggedIn && (
              <Drawer
                docked={false}
                open={this.state.open}
                onClose={this.handleClose}
                onRequestChange={open => this.setState({open})}
              >
                <Link to="/home">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}
                    >Home</MenuItem>
                </Link>
                <Link to="/account/activities">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>Activities</MenuItem>
                </Link>
                <Link to="/account/points">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>My Points</MenuItem>
                </Link>
                <Link to="/myEvents">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>My Events</MenuItem>
                </Link>
                <Link to="/organizations">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>Organizations</MenuItem>
                </Link>
                <Link to="/representatives">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>
                    Representatives
                  </MenuItem>
                </Link>
                <Link to="/sponsors">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>Sponsors</MenuItem>
                </Link>
                <Link to="/events">
                  <MenuItem onClick={this.handleClose} className={classes.menuItem}>Events</MenuItem>
                </Link>
                <div className="progress-wrapper">
                  <CircularProgressbar
                    strokeWidth={15}
                    percentage={pointsPercentage}
                    text={`${pointsPercentage}%`}
                  />
                </div>
                <div>
                  <Button color="primary" onClick={handleClick} className={classes.menuItem}>
                    Logout
                  </Button>
                </div>
              </Drawer>
            )}
            <Grid container className={classes.navTitle}>
              <Link to="/">MIND THE GAP</Link>
            </Grid>
            {isLoggedIn ? (
              <div>
                {/* <Button color="inherit" component={Link} to="/home">
                    Home
                  </Button> */}
                <div className="spend-points">
                  Points to Spend:{' '}
                  {this.props.totalPoints - this.props.user.pointsSpent}
                </div>
              </div>
            ) : (
              <div>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      // </MuiThemeProvider>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}
const mapState = state => {
  let sum = 0
  console.log(state)
  if (state.user.id && state.points.allPoints !== 'no user') {
    state.points.allPoints.forEach(point => {
      sum += point.totalEarned
    })
  }
  return {
    isLoggedIn: !!state.user.id,
    points: state.points || [],
    totalPoints: sum || 0,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(ButtonAppBar))
