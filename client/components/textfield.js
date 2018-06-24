import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { addActivity } from '../store'
import { connect } from 'react-redux'



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

  handleClick = (event) => {

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
    const { classes } = this.props
    return (
      <div>
        <TextField
          id="number"
          label="Amount Donated"
          align="center"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          margin="normal"
        />
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
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatch)(TextFields))
