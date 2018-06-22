import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import OrgList from './orgList'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const ranges = [
  {
    value: 'searchTerm',
    label: 'Name'
  },
  {
    value: 'city',
    label: 'City'
  },
  {
    value: 'state',
    label: 'State'
  },
  {
    value: 'zipCode',
    label: 'Zip Code'
  }
]

class InputAdornments extends React.Component {
  constructor() {
    super()
    this.state = {
      apiParam: '',
      userInput: '',
      view: 'none',
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value})
  }
  async handleSubmit(event) {
    event.preventDefault()
    const data = await axios.get(
      `/api/organizations/${this.state.apiParam}/${this.state.userInput}`
    )
    this.setState({results: {data}})
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <h1>Organizations</h1>
        <div className={classes.root}>
          <TextField
            select
            label="Search By:"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.apiParam}
            onChange={this.handleChange('apiParam')}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <form onSubmit={this.handleSubmit}>
            <FormControl
              className={classNames(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
              aria-describedby="weight-helper-text"
            >
              <Input
                id="adornment-weight"
                value={this.state.userInput}
                onChange={this.handleChange('userInput')}
                inputProps={{
                  'aria-label': 'Weight'
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Search
              </Button>
            </FormControl>
            <Grid
              container
              className={classes.root}
              spacing={16}
              justify="center"
            >
              <OrgList orgInfo={this.state.results} />
            </Grid>
          </form>
        </div>
      </div>
    )
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InputAdornments)
