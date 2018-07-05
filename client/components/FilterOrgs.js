import React from 'react'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    display: 'flex',
    wrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    flexBasis: 200
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

class FilterOrgs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterType: '',
      filterText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onFilterSubmit(this.state.filterType, this.state.filterText)
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
      <form onSubmit={this.handleSubmit}>
          <TextField
            select
            label={this.props.label}
            name="filterType"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.filterType}
            onChange={this.handleChange}
            color='#ffffff'
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          </TextField>

            {/* <FormControl
              className={classNames(
                classes.margin,
                classes.withoutLabel,
                classes.textField
              )}
              aria-describedby="weight-helper-text"
              color='primary'
            > */}
            <TextField
              id="search"
              label="For:"
              type="text"
              className={classes.textField}
              margin="normal"
              color='primary'
              name="filterText"
              value={this.state.filterText}
              onChange={this.handleChange}
            />
              {/* <Input
                id="adornment-weight"
                name="filterText"
                value={this.state.filterText}
                onChange={this.handleChange}
                inputProps={{
                  'aria-label': 'Weight'
                }}
                color='secondary'
              /> */}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                {this.props.button}
              </Button>
          </form>
      </div>
    )
  }
}

export default withStyles(styles)(FilterOrgs)
