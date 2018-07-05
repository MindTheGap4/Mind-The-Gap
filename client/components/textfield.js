import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {addActivity} from '../store'
import {connect} from 'react-redux'
import {updatePoints} from '../store/reducers/pointsReducer'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      orgName: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
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
    this.setState({ open: true});
    this.props.addActivity(activity)
  }

  handleClickOpen = () => {
    this.setState({ open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };

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
          <p/>
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
        <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle id = 'alert-dialog-slide-title'>
        Confirming Donation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Great Job donating ${this.state.amount} today!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Thanks!
          </Button>
        </DialogActions>
        </Dialog>
        </FormControl>
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
