import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {addActivity} from '../store'
import {connect} from 'react-redux'
import {updatePoints} from '../store/reducers/pointsReducer'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

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
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      orgName: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleClick = event => {
    event.preventDefault()
    const activity = {
      name: this.props.orgName,
      points: this.state.amount,
      type: 'organizations',
      donationUrl: this.props.donationUrl
    }

    this.props.addActivity(activity)
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <FormControl >
          <InputLabel htmlFor="adornment-amount">
            Amount Donated
          </InputLabel>
          <Input
          id="adornment-amount"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          className={classes.textField}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
          justify="center"
          onClick={this.handleClick}
        >
          I Donated!
        </Button>
      </div>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatch = dispatch => {
  return {
    addActivity: activity => {
      dispatch(addActivity(activity))
      dispatch(updatePoints({points: +activity.points}))
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatch)(TextFields))
