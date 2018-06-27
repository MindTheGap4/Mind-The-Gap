import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {monthNumToName} from '../../helpers';
import {addGoal} from '../store/reducers/pointsReducer';
import {connect} from 'react-redux';

const currentMonthNum = new Date().getMonth()
const currentMonthName = monthNumToName(currentMonthNum)
console.log('MONTH NAME', currentMonthName)

export default class GoalsDialog extends React.Component {
  constructor(){
    super()
  this.state = {
    open: false,
  };
  this.handleClickOpen = this.handleClickOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    this.setState({ open: false });
    this.props.updateGoal()
  }
  handleChange = event => {
    event.target.name = event.target.value
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Set your goal!</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Goalz</DialogTitle>
          <DialogContent>
            <DialogContentText>
              It's {currentMonthName}!
              What will this month's goal be??
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Points"
              type="number"
              fullWidth
              name="goal"
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Ready to kick butt
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


const mapDispatch = dispatch => {
  return {
    updateGoal: goal => dispatch(addGoal(goal))
  }
}


