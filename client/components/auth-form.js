import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, createUser} from '../store'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

/**
 * COMPONENT
 */
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200,
  },
});

const AuthForm = props => {
  const {name, displayName, handleSubmit, error, classes} = props


  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
      <Grid>
        {name === 'signup' && (
          <Grid>
          <TextField
          id="firstName"
          label="First Name"
          type="text"
          className={classes.textField}
          margin="normal"
          color='primary'
        />
        <TextField
        id="lastName"
        label="Last Name"
        type="text"
        className={classes.textField}
        margin="normal"
        color='primary'
      />
      </Grid>
        )}
        <TextField
        id="email"
        label="Email"
        type="email"
        className={classes.textField}
        margin="normal"
        color='primary'
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        className={classes.textField}
        margin="normal"
        color='primary'
      />
        <div>
          <Button variant="contained" color="primary" type="submit" className={classes.button}>{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        </Grid>
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      // if (evt.target.firstName.value !== undefined) {
      if (evt.target.name === 'signup') {
        const firstName = evt.target.firstName.value
        const lastName = evt.target.lastName.value
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(createUser(email, password, formName, firstName, lastName))
        ownProps.history.push('/home')
      } else {
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, formName))
        ownProps.history.push('/home')
      }
    }
  }
}

export const Login = withStyles(styles)(connect(mapLogin, mapDispatch)(AuthForm))
export const Signup = withStyles(styles)(connect(mapSignup, mapDispatch)(AuthForm))

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
