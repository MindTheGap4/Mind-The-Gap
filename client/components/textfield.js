import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

class TextFields extends React.Component {
  state = {
    age: ''
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const {classes} = this.props

    return (
      <TextField
        id="number"
        label="Amount Donated"
        align="center"
        value={this.state.age}
        onChange={this.handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{inputProps: {min: 0, max: 100}}}
        margin="normal"
      />
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
