import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import {Link, withRouter} from 'react-router-dom'
import {addActivity} from '../../store/reducers/activityReducer'
import {updatePoints} from '../../store/reducers/pointsReducer'
import {connect} from 'react-redux'

const SingleRep = props => {
  const rep = props.location.state.selectedRep
  // console.log('props', props)
  const activity = {
    name: rep.first_name + ' ' + rep.last_name,
    location: rep.roles[0].state,
    link: rep.url,
    type: 'representatives'
  }
  console.log(activity)
  const buttonSubmit = () => props.addActivity(activity)
  return (
    <div>
      <div>
        Name: {rep.first_name} {rep.last_name}
      </div>
      <div>Phone: {rep.roles[0].phone}</div>
      <div>Link: {rep.url}</div>
      <button type="button" onClick={buttonSubmit}>
        I CONTACTED THIS REP TODAY, COLLECT MY POINTS
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addActivity: activity => {
      dispatch(addActivity(activity))
      dispatch(updatePoints({points: 5}))
    }
  }
}

export default connect(null, mapDispatchToProps)(SingleRep)
