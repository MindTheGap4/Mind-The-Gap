import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function ButtonAppBar(props) {
  const { classes, handleClick, isLoggedIn } = props
  return (
    <MuiThemeProvider>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Mind the Gap
            </Typography>
            {isLoggedIn ? (
              <div>
                <Button color="inherit" component={Link} to="/organizations">
                  Organizations
                </Button>
                <Button color="inherit" component={Link} to="/home">
                  Home
                </Button>

                <Button color="inherit" onClick={handleClick}>
                  Logout
                </Button>
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
    </MuiThemeProvider>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
