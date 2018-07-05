import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CircularProgressbar from 'react-circular-progressbar'
import {logout} from '../store'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const styles = {
  root: {
    flexGrow: 2,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class ButtonAppBar extends React.Component {
  state = {
    open: false,
    open2: false,
    open3: false,
    open4: false
  }

  handleToggle = () => this.setState(state => ({open: !state.open}))

  handleClick = () => {
    this.setState(state => ({open2: !state.open2}))
  }

  handleClick2 = () => {
    this.setState(state => ({open3: !state.open3}))
  }

  handleClick3 = () => {
    this.setState(state => ({open4: !state.open4}))
  }

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
                width={200}
                open={this.state.open}
                onClose={this.handleClose}
                onRequestChange={open => this.setState({open})}
              >
                <Link to="/home">
                  <MenuItem onClick={this.handleClose}>Home</MenuItem>
                </Link>
                <MenuItem button onClick={this.handleClick}>
                  My Info
                  {/* <ListItemText inset primary="Inbox" /> */}
                  {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      onClick={this.handleClose}
                      className={classes.nested}
                    >
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/account/activities">My Activities</Link>
                      </MenuItem>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/account/points">My Points</Link>
                      </MenuItem>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/myEvents">My Events</Link>
                      </MenuItem>
                    </ListItem>
                  </List>
                </Collapse>

                <MenuItem button onClick={this.handleClick2}>
                  Earn Points
                  {/* <ListItemText inset primary="Inbox" /> */}
                  {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      onClick={this.handleClose}
                      className={classes.nested}
                    >
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/organizations">Organizations</Link>
                      </MenuItem>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/representatives">Representatives</Link>
                      </MenuItem>
                    </ListItem>
                  </List>
                </Collapse>
                <MenuItem button onClick={this.handleClick3}>
                  Spend Points
                  {/* <ListItemText inset primary="Inbox" /> */}
                  {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      onClick={this.handleClose}
                      className={classes.nested}
                    >
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/sponsors">Sponsors</Link>
                      </MenuItem>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/events">Events</Link>
                      </MenuItem>
                    </ListItem>
                  </List>
                </Collapse>
                <div className="progress-wrapper">
                  <CircularProgressbar
                    strokeWidth={15}
                    percentage={pointsPercentage}
                    text={`${pointsPercentage}%`}
                  />
                </div>
                <div>
                  <Button color="primary" onClick={handleClick}>
                    Logout
                  </Button>
                </div>
              </Drawer>
            )}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Link to="/">MIND THE GAP</Link>
            </Typography>
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
