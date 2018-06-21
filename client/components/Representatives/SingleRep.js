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

const SingleRep = props => {
  console.log(props)
  const rep = props.location.state.selectedRep
  return (
    <div>
      <div>
        Name: {rep.first_name} {rep.last_name}
      </div>
      <div>Phone: {rep.roles[0].phone}</div>
      <div>Link: {rep.url}</div>
    </div>
  )
}

export default SingleRep
